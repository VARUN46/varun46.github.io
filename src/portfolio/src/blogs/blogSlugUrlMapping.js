import DsaNArraySumZero from './DsaNArraySumZero';
import UniqueSubstrInStr from './UniqueSubstrInStr';

export function blogSlugUrlMapping() {
    return {
        'n-size-array-sum-zero': { 
            title: 'Given a value of N, create an array of N such that it results to zero.', 
            component: <DsaNArraySumZero/>
        },
        'unique_substr-in-string': { 
            title: 'You are given a string. You need to find substrings in a string that are made of unique non repeating characters.', 
            component: <UniqueSubstrInStr/>
        } 
    }
}