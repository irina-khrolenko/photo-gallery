declare global {
interface Media {
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
      }
    }
interface Media_Plain {
      id: number;
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      createdAt: Date;
      updatedAt: Date;
    }
}

export {};