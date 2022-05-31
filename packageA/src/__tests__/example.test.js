require('package-b/directory/found');
require('package-b/directory/notFound');

describe('Example test', () => {
    it('will fail, because imports will not be resolved correctly', () => {
        console.log(found, notFound)
    })
})