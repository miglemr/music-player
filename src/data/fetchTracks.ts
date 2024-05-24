import { Track } from '@/store';

export const fetchTracks = () =>
  new Promise<Array<Omit<Track, 'favorite'>>>(resolve => {
    resolve([
      {
        id: 1,
        artist: 'Sam Day',
        title: 'GO',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/e35d3a7a-0f32-4ae3-a1eb-2a46aacc1cb0/artwork-440x440.jpg',
        audioFilePath: '/audio/Sam-Day-GO.mp3',
        duration: 152,
      },
      {
        id: 2,
        artist: 'Sam Day',
        title: '18:28 OUTBOUND',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/e35d3a7a-0f32-4ae3-a1eb-2a46aacc1cb0/artwork-440x440.jpg',
        audioFilePath: '/audio/Sam-Day-18_28-OUTBOUND.mp3',
        duration: 83,
      },
      {
        id: 3,
        artist: 'PLVTO',
        title: 'Are You With Me',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/470f8b0b-6e84-4304-a93b-53fd685fd770/artwork-440x440.jpg',
        audioFilePath: '/audio/PLVTO-Are-You-With-Me.mp3',
        duration: 191,
      },
      {
        id: 4,
        artist: 'Coopex',
        title: 'Over The Sun (Pt. 2)',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/745a2859-9f95-46cc-9650-dbb91d54e19e/artwork-440x440.jpg',
        audioFilePath: '/audio/Coopex-Over-The-Sun-(Pt.-2).mp3',
        duration: 161,
      },
      {
        id: 5,
        artist: "Ghost'n'Ghost, Blooom, ASHWOOD",
        title: 'Realize',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/9c53a914-fe48-4fdb-be15-0f0b4f0ddc71/artwork-440x440.jpg',
        audioFilePath: '/audio/ASHWOOD-Realize.mp3',
        duration: 180,
      },
      {
        id: 6,
        artist: 'Keerthin',
        title: 'Escape',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/8815954f-4960-4887-802c-1603470c1df6/artwork-440x440.jpg',
        audioFilePath: '/audio/Keerthin-Escape.mp3',
        duration: 159,
      },
      {
        id: 7,
        artist: 'PHI NIX',
        title: 'The Word Is Out',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/f505adfa-4c76-43ec-b469-b0903f1702f8/artwork-440x440.jpg',
        audioFilePath: '/audio/PHI-NIX-The-Word-Is-Out.mp3',
        duration: 154,
      },
      {
        id: 8,
        artist: 'Zoe Moon, STAR SEED',
        title: 'Cayenne',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/d452e78e-bded-4c57-9fd5-af5386bf2372/artwork-440x440.jpg',
        audioFilePath: '/audio/STAR-SEED-Cayenne.mp3',
        duration: 269,
      },
      {
        id: 9,
        artist: 'Rogers & Dean',
        title: 'No Doubt',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/99eb1d71-8486-4973-ad47-4760abbe0b8c/artwork-440x440.jpg',
        audioFilePath: '/audio/Rogers&Dean-No Doubt.mp3',
        duration: 192,
      },
      {
        id: 10,
        artist: 'Aisake, Dosi',
        title: 'Cruising',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/5367b5f6-f726-4f16-9793-0a117dc790b1/artwork-440x440.jpg',
        audioFilePath: '/audio/Dosi&Aisake-Cruising.mp3',
        duration: 160,
      },
      {
        id: 11,
        artist: 'Kozah',
        title: 'Cali4nia',
        cover:
          'https://linkstorage.linkfire.com/medialinks/images/6db86bda-777e-4648-b9af-78aa1459f883/artwork-440x440.jpg',
        audioFilePath: '/audio/Kozah-Cali4nia.mp3',
        duration: 256,
      },
    ]);
  });
