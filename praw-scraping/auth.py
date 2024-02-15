import praw
# from dotenv import load_dotenv
import os

# load_dotenv()

# print(os.getenv('REDDIT_ACCOUNT_USERNAME'))
# print(os.getenv('REDDIT_ACCOUNT_PASSWORD'))
# print('-' + os.getenv('CS444_SCRAPER_ID'))
# print(os.getenv('CS444_SCRAPER_SECRET'))

# scraper_id = '-' + os.getenv('CS444_SCRAPER_ID')
reddit = praw.Reddit(
    "DEFAULT"
    # user_agent="osx:cs444-scraper:v1.0 (by /u/blc5_)",
    # username=os.getenv('REDDIT_ACCOUNT_USERNAME'),
    # password=os.getenv('REDDIT_ACCOUNT_PASSWORD'),
    # client_id=scraper_id,
    # client_secret=os.getenv('CS444_SCRAPER_SECRET'),
    # refresh_token=os.getenv('REFRESH_TOKEN'),
)
# print(reddit.user.me())
# print(reddit.auth.scopes())
print(reddit.auth.scopes())

reddit.read_only = True
