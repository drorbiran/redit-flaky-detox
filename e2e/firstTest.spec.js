describe('Example', () => {
  
    beforeEach(async () => {
        await device.relaunchApp();
    });
    
    it('should display categories when opening first screen', async () => {
        await expect(element(by.id('categoryList'))).toBeVisible();
        await expect(element(by.id('category1'))).toBeVisible();
    });

    it('should display posts when pressing on a category', async () => {
        await expect(element(by.id('category1'))).toBeVisible();
        await element(by.id('category1')).tap();
        await expect(element(by.id('postList'))).toBeVisible();
        await expect(element(by.id('post1'))).toBeVisible();
    });
    
});