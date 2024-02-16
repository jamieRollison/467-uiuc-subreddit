import csv
import init
import string
import re
from datetime import datetime

def clean_str(s: str):
    rv = s.translate(str.maketrans('', '', string.punctuation))
    rv = re.sub(r"\s+", ' ', rv).lower().strip()
    return rv

def main():
    reddit = init.reddit
    rUIUC = reddit.subreddit("UIUC")

    writer = csv.writer(open("uiuc_top_all.csv", "w"))
    writer.writerow(["Date", "URL", "Score", "Title", "PostText"])

    for submission in rUIUC.top(time_filter='all', limit=None):
        title = clean_str(submission.title)
        selftext = clean_str(submission.selftext)
        date = datetime.fromtimestamp(submission.created_utc)
        writer.writerow([date, submission.shortlink, submission.score, title, selftext])

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