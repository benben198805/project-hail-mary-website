export interface Poster {
  id: string;
  title: string;
  subtitle?: string;
  /** Path to the poster image (accessible from the browser) */
  imageSrc: string;
  /** High-resolution download URL */
  downloadUrl?: string;
  /** Type label shown as a tag */
  type: 'Teaser' | 'IMAX' | '70mm' | 'Character' | 'Format' | 'Fan Art' | 'Other' | 'Poster';
}

/**
 * Movie poster collection for Project Hail Mary (2026).
 *
 * 📍 Images are stored in public/images/post/
 *    The bulk HD download link is shown on the gallery page.
 *
 * ➡️ To replace an image:
 *    Overwrite the file in public/images/post/ with the same name
 *
 * ➡️ To add per-poster download links:
 *    Set downloadUrl to the high-res URL
 */

const BASE = '/images/post';

const posters: Poster[] = [
  {
    id: 'poster-02',
    title: 'Poster 2',
    imageSrc: `${BASE}/project_hail_mary_ver2.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-03',
    title: 'Poster 3',
    imageSrc: `${BASE}/project_hail_mary_ver3.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-04',
    title: 'Poster 4',
    imageSrc: `${BASE}/project_hail_mary_ver4.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-05',
    title: 'Poster 5',
    imageSrc: `${BASE}/project_hail_mary_ver5.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-06',
    title: 'Poster 6',
    imageSrc: `${BASE}/project_hail_mary_ver6.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-07',
    title: 'Poster 7',
    imageSrc: `${BASE}/project_hail_mary_ver7.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-08',
    title: 'Poster 8',
    imageSrc: `${BASE}/project_hail_mary_ver8.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-09',
    title: 'Poster 9',
    imageSrc: `${BASE}/project_hail_mary_ver9.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-10',
    title: 'Poster 10',
    imageSrc: `${BASE}/project_hail_mary_ver10.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-11',
    title: 'Poster 11',
    imageSrc: `${BASE}/project_hail_mary_ver11.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-12',
    title: 'Poster 12',
    imageSrc: `${BASE}/project_hail_mary_ver12.jpg`,
    type: 'Poster',
  },
  {
    id: 'poster-13',
    title: 'Poster 13',
    imageSrc: `${BASE}/project_hail_mary_ver13.jpg`,
    type: 'Poster',
  },
];

export default posters;
