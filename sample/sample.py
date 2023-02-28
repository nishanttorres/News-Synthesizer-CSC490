import os


def mimic3tts():
    f = open("script_test.txt", "w")
    f.write("Hello world! I have many things to say and not much time to say it.")
    f.close()

    f = open("script_test.txt", "r")
    print(f.read())

    cmd_str = "cat script_test.txt | mimic3 --ssml > ../Prototypes/mimic3/output.wav"
    os.system(cmd_str)


def main():
    mimic3tts()


if __name__ == "__main__":
    main()
