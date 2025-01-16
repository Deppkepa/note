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
            notes: [],
			Edit:false,
        };
    },
	mounted() {
		this.loadMemory();
	},
    methods: {
        addNote() {
            this.notes.push({ 
				id:Date.now(),
				title:this.newNote.title,
				content:this.newNote.content,
				category:this.newNote.category,
				status:this.newNote.status,
				important:this.newNote.important
			});
			this.newNote = {
                title: '',
                content: '',
                category: 'Купоны',
                status: 'Активно',
                important: false
            };
			this.saveMemory();
        },
		clearMemory() {
			localStorage.removeItem('notes');
			this.notes=[];
		},
		saveMemory() {
			localStorage.setItem('notes', JSON.stringify(this.notes));			
		},
		loadMemory() {
			const memory = localStorage.getItem('notes');
			if(memory){
				this.notes = JSON.parse(memory);
			}
		},
        removeNote(index) {
            this.notes.splice(index, 1);
			this.saveMemory();
        },
		edit(note) {
			this.newNote = {...note};
			this.Edit = true;
		},
		upload() {
			const index = this.notes.findIndex(note => note.id === this.newNote.id);
			if (index !==-1) {
				this.notes.splice(index, 1, {...this.newNote});
			}
			this.saveMemory();
		}
    }
});