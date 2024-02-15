import csv
import init

def main():
    reddit = init.reddit
    # process as needed here
    for submission in reddit.front.top():
        print(submission.author)
    pass

if __name__ == "__main__":
    exit(main())