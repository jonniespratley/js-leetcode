function findSubstring(s) {
    let map = new Array(256).fill(0);
    let counter; // check whether the substring is valid
    
    let d = s.length; //the length of substring
    
    let begin = 0;
    let end = d - 1; //two pointers, one point to tail and one head
    

    //for () { /* initialize the hash map here */ }

    while (end < s.length) {


        //if (map[s[end++]]-- ?) {  /* modify counter here */ }

        while ( counter/* counter condition */ ) {
            /* update d here if finding minimum*/
            //increase begin to make it invalid/valid again
            //if (map[s[begin++]]++ ?) { /*modify counter here*/ }
        }
        /* update d here if finding maximum*/
    }

    return d;
}