def distinct_substr_str(str):
    unique_substr = []
    substr = []

    for window_end, s_letter in enumerate(str):
        if s_letter not in substr:
            substr.append(s_letter)
        else:
            unique_substr.append(''.join(substr))
            substr.clear()
            substr.append(s_letter)

    unique_substr.append(''.join(substr))
    substr.clear()
    return unique_substr


print(distinct_substr_str('abcabccab'))
