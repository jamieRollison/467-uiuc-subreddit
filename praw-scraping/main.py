import csv
import init
import string
import re
from datetime import datetime

import nltk
from nltk.sentiment.util import *
from nltk.sentiment.vader import SentimentIntensityAnalyzer
nltk.download("vader_lexicon")

def clean_str(s: str):
    rv = s.translate(str.maketrans('', '', string.punctuation))
    rv = re.sub(r"\s+", ' ', rv).lower().strip()
    return rv

def sentiment_analysis(post_title, post_text):
    # find sentiment of the post title and text body (considers emoticons and letter case used)
    title_sentiment = SentimentIntensityAnalyzer().polarity_scores(post_title)['compound']
    text_sentiment = SentimentIntensityAnalyzer().polarity_scores(post_text)['compound']
    overall_sentiment = 0.0
    if (post_text != ""):
        overall_sentiment = (0.3 * title_sentiment) + (0.7 * text_sentiment)
    else:        # body text is empty
        overall_sentiment = title_sentiment

    return overall_sentiment

def main():
    reddit = init.reddit
    rUIUC = reddit.subreddit("UIUC")

    writer = csv.writer(open("uiuc_top_all.csv", "w"))
    writer.writerow(["Date", "URL", "Score", "Title", "PostText", "Topic", "Sentiment"])

    for submission in rUIUC.top(time_filter='all', limit=None):
        title = clean_str(submission.title)
        selftext = clean_str(submission.selftext)
        date = datetime.fromtimestamp(submission.created_utc)
        topic = submission.link_flair_text
        sentiment = sentiment_analysis(title, selftext)
        if (topic != None):  
            writer.writerow([date, submission.shortlink, submission.score, title, selftext, topic, sentiment])
        

    writer = csv.writer(open("uiuc_controversial_all.csv", "w"))
    writer.writerow(["Date", "URL", "Score", "Title", "PostText"])

    for submission in rUIUC.controversial(time_filter='all', limit=None):
        title = clean_str(submission.title)
        selftext = clean_str(submission.selftext)
        date = datetime.fromtimestamp(submission.created_utc)
        writer.writerow([date, submission.shortlink, submission.score, title, selftext])

    return 0

if __name__ == "__main__":
    exit(main())
