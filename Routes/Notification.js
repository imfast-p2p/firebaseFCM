import express from 'express';
import fetch from 'node-fetch';

const app = express();

// Enable express.json() middleware
app.use(express.json());

const router = express.Router();

router.post('/sendToAll', (req, res) => {
    var notification = {
        'title': 'New Notification',
        'text': 'Subtitle'
    };
    console.log(req.body);
    var fcm_tokens = req.body.tokens;
    // var fcm_tokens = ["d7XCsjAdolLHa4bR_IoeGU:APA91bHHSOQ_PZ2OGyqqqGyFen3Z8J1zqmlj0KTN7OdyrCHBhbIltOZalnWeWgQKWOwRzMLuqGf190XcRwvRlLKcqTkrzT9Y16Qos7h8iF-J6jcUnkVwygez8zhOe3R19JNv-FjY3WDN"];
    // var fcm_tokens = ["fj_fiU4qTVqADKzMPSLBD8:APA91bFQR0hfM1waEMItjfQshVMomiBPMknD467HAdCJos7veUhdUd4sQUN8vi80Sf5flII2PG4_zlJMdf5pNDj4bqimZt9lBOufY6hVb6oiYJqEdjeOp9f2Wl-i2GC8ytu9X_n26tr6"];

    var notification_body = {
        'notification': notification,
        'registration_ids': fcm_tokens
    }

    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'key=' + 'AAAAdr0XzWg:APA91bGiacQG_1c7FBrjkT6AGSkcWVdMD6gB4cXzGdpW9gxxfbvtBsohYqksgK9qyb6RhLbCgQR1K3yZLZ7TFhx-D2q4s9gEA7xyYdb9sdYwEYy8RrrEItQVXDIv4Cg_0Zh-OEVc8FYg',
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(notification_body)
    })
        .then(() => {
            res.status(200).send('Notification sent successfully');
        })
        .catch((error) => {
            res.status(400).send('Error');
            console.log(error);
        });
});

export default router;
