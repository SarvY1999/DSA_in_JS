function fact(no) {
    if (no < 0 || no == 1) {
        return 1;
    } if (no > 0) {
        return no * fact(no - 1);  //  5 * 4 * 3 * 2 * 1
    }
}


console.log(fact(5));