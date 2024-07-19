const fs = require('fs');

function processOrdersInBatches(orders, batchSize) {
    for (let i = 0; i < orders.length; i += batchSize) {
        const batch = orders.slice(i, i + batchSize);
        console.log(`Processing batch ${Math.floor(i / batchSize) + 1}`);
        console.log(batch);
    }
}

const jsonFilePath = 'orders.json';

fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const orders = JSON.parse(data); 
        const batchSize = 5; 
        processOrdersInBatches(orders, batchSize);
    } catch (err) {
        console.error('Error parsing JSON data:', err);
    }

    console.log('Batch processing of order data is complete.');
});