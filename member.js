function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        details: function() {
            console.log(this.name + ' is ' + this.age + ' years old.');
            console.log(this.name + ' knows ' + this.skills.join(', '));
        }
    };
    return member;
}