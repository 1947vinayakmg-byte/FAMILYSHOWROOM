/**
 * Simulated media uploads to hosting platforms (e.g. Cloudinary).
 */

export const cloudinaryService = {
  /**
   * Mocks image upload and returns a direct image link.
   */
  uploadImage(file: File): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80');
      }, 1500);
    });
  }
};
