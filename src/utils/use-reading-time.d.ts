declare module "use-reading-time" {
  export default function useReadingTime(
    text: string,
    options?: {
      wordsPerMinute?: number;
      wordBound?: (char: string) => boolean;
    }
  ): number;
}
