import os


def synthesize_speech(input_file, output_file):
    f = open({input_file}, "r")
    print(f.read())
    cmd_str = f"cat script_test.txt | mimic3 --ssml > ./{output_file}"
    os.system(cmd_str)
