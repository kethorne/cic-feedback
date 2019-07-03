import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
    Meteor.publish("feedback", function feedbackPublication() {
        if (this.userId) {
        return Feedback.find();
    } else {
        return null;
    }
    });
}

Meteor.methods({
    "feedback.update"(feedbackID, updatedFeedback) {
        if (this.userId) {
        Feedback.update(feedbackID, { $set: {message: updatedFeedback } });
    }
    
},
"feedback.remove"(feedbackID) {
    if (this.userID) {
        Feedback.remove(feedbackID);
    } else {
        throw new Meteor.Error("not-authorized. GTFO");
    }
}
});

export const Feedback = new Mongo.Collection("Feedback");
