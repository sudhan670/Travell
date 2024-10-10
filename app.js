const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const app = express();
app.use(bodyParser.json());

// AWS RDS Config
const db = new AWS.RDSDataService({
    region: 'us-east-1', // specify region
    secretArn: process.env.SECRET_ARN,
    resourceArn: process.env.RESOURCE_ARN,
    database: 'travelDB'
});

// Route: Generate Personalized Itinerary
app.post('/generate-itinerary', (req, res) => {
    const userId = req.body.userId;
    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }
    
    // Run Python script for destination recommendation
    exec(`python3 preprocessing_and_clustering.py`, (err, stdout, stderr) => {
        if (err) {
            return res.status(500).json({ error: "Error in generating itinerary" });
        }
        
        const recommendedDestination = stdout.trim();
        
        // Return the recommended itinerary
        const itinerary = {
            userId: userId,
            destination: recommendedDestination,
            days: [
                { day: 1, activities: ["Explore city center", "Visit popular museums"] },
                { day: 2, activities: ["Hiking at scenic location", "Fine dining in evening"] },
                // Example Itinerary, you can customize this more
            ]
        };
        res.json(itinerary);
    });
});

// Route: Get Destination
app.post('/get-destination', (req, res) => {
    const userId = req.body.userId;
    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

    // Run Python script for destination selection
    exec(`python3 preprocessing_and_clustering.py`, (err, stdout, stderr) => {
        if (err) {
            return res.status(500).json({ error: "Error in fetching destination" });
        }
        
        const destination = stdout.trim();
        res.json({ userId: userId, recommendedDestination: destination });
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
         
