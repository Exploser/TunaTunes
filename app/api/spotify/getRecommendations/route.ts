// src/app/api/spotify/getRecommendations/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'cookie';
import { fetchSpotifyRecommendations, fetchSpotifyToken } from '@/lib/spotify';

export const GET = async (req: NextRequest) => {
  try {
    const cookies = req.headers.get('cookie');
    if (!cookies) throw new Error('No cookies found');

    const parsedCookies = parse(cookies);
    let accessToken = parsedCookies.spotify_access_token;
    if (!accessToken) {
      try {
        accessToken = await fetchSpotifyToken();
      } catch (error) {
        console.error('Error fetching Spotify token:', error);
        return NextResponse.json({ error: 'Error fetching Spotify token' }, { status: 500 });
      }
    }

    // Get query parameters
    const { seed_tracks = '', seed_artists = '', seed_genres = '' } = Object.fromEntries(new URL(req.url).searchParams);

    try {
      if (accessToken) {
        const recommendations = await fetchSpotifyRecommendations(accessToken, seed_artists, seed_tracks, seed_genres);
        return NextResponse.json(recommendations, { status: 200 });
      } else {
        throw new Error('Access token is not available');
      }
    } catch (fetchError) {
      console.error('Error fetching recommendations:', fetchError);
      return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error', error);
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
  }
};