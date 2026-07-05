import { BadRequestException } from '@nestjs/common';
import { FigmaService } from './figma.service';

describe('FigmaService', () => {
  const config = { get: jest.fn() };
  let service: FigmaService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new FigmaService(config as never);
  });

  describe('parseFigmaUrl', () => {
    it('extracts the file key and node id from a /file/ URL', () => {
      const result = service.parseFigmaUrl(
        'https://www.figma.com/file/abc123/My-Design?node-id=1-2',
      );
      expect(result).toEqual({ fileKey: 'abc123', nodeId: '1:2' });
    });

    it('extracts the file key from a /design/ URL with no node id', () => {
      const result = service.parseFigmaUrl(
        'https://www.figma.com/design/xyz789/My-Design',
      );
      expect(result).toEqual({ fileKey: 'xyz789', nodeId: null });
    });

    it('rejects a non-figma URL', () => {
      expect(() =>
        service.parseFigmaUrl('https://example.com/file/abc123'),
      ).toThrow(BadRequestException);
    });

    it('rejects a figma.com URL with no recognizable file path', () => {
      expect(() =>
        service.parseFigmaUrl('https://www.figma.com/community'),
      ).toThrow(BadRequestException);
    });

    it('rejects a malformed URL', () => {
      expect(() => service.parseFigmaUrl('not a url')).toThrow(
        BadRequestException,
      );
    });
  });

  describe('fetchMetadata', () => {
    it('returns null when no access token is configured', async () => {
      config.get.mockReturnValue(undefined);

      await expect(service.fetchMetadata('abc123', null)).resolves.toBeNull();
    });
  });
});
