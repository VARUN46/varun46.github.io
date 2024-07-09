function UniqueSubstrInStr(){
    return (<>
    <p>This is the most commonly asked problem in competitive coding platforms as well as interviews</p>
    <h2>Problem: You are given a string. You need to find substrings in a string that are made of unique non repeating characters.</h2>
    <p>Examples are below:</p>
    <p>hhelloworld returns {"['h', 'hel', 'low']"}</p>
    <p>abcabccab returns {"['abc', 'abc', 'cab']"}</p>
    <h2>Approach : Unique substring in a string is bit tricky, it involes identiying a point to start creating a bag of letters if that letter does not exists in bag. If letter already exists take out all the letters create string add in result and again start filling the bag. </h2>
    <h2>Key Topics : Basic programming, Strings manipulation,  Hashsets</h2>
    <h2>Code : </h2>
    <br/>
    <code className="code-container"><pre>{`

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

`}
        </pre>
    </code>
    
    
    </>)
}

export default UniqueSubstrInStr;