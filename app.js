new Vue({
    el: '#app',
    data() {
        return {
            newNote: {
                title: '',
                content: '',
                category: 'Купоны',
                status: 'Активно',
                important: false
            },
            notes: []
        };
    },
    methods: {
        addNote() {
            this.notes.push({ ...this.newNote });
            this.newNote = {
                title: '',
                content: '',
                category: 'Купоны',
                status: 'Активно',
                important: false
            };
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        }
    }
});
s