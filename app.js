const app = Vue.createApp({
    data: function() {
        return {
            by_select: false,
            challengesSet: new Set(),
            selectedChallenges: new Set(),
            
            difficulties: ['Entry Level','Easy','Medium','Hard','Insane'],
            chosenDifficulties: new Set(),
            easyChallenges: [],
            entryChallenges: [],
            mediumChallenges: [],
            hardChallenges: [],
            insaneChallenges: [],

            tags: new Set(),
            chosenTags: new Set(),
        }
    },
    methods: {
        toggleChallengeType() {
            this.by_select = !this.by_select

            if (this.by_select) {
                this.chosenDifficulties = new Set()
                this.chosenTags = new Set()
            } else {
                this.selectedChallenges = new Set()
            }
        },
        addChallenge() {
            this.selectedChallenges.add(event.target.value)
        },
        removeChallenge(item) {
            this.selectedChallenges.delete(item)
        },
        addDifficulty() {
            this.chosenDifficulties.add(event.target.value)
        },
        removeDifficulty(item) {
            this.chosenDifficulties.delete(item)
        },
        addTag() {
            this.chosenTags.add(event.target.value)
        },
        removeTag(item) {
            this.chosenTags.delete(item)
        },
    },
    async mounted() {
        // Get challenges
        const res1 = await axios.get('https://api.cyberedu.ro/v1/challenge')
        const response1 = res1.data

        response1.forEach((item) => {
            for (let i = 1; i < item['tags'].length; i++)
            {   if(!/^\w+$/.test(item['tags'][i].name))
                this.challengesSet.add(item['tags'][i].name)
            }
        })

        // Get difficulty levels
        const res2 = await axios.get('https://api.cyberedu.ro/v1/challenge/difficulties')
        const response2 = res2.data

        response2.forEach((item) => {
            if(item['difficulty'] === 'Easy') {
                this.easyChallenges.push(item)
            } else if (item['difficulty'] === 'Entry Level') {
                this.entryChallenges.push(item)
            } else if (item['difficulty'] === 'Medium') {
                this.mediumChallenges.push(item)
            } else if (item['difficulty'] === 'Hard') {
                this.hardChallenges.push(item)
            } else {
                this.insaneChallenges.push(item)
            }
        })

        // Get tags
        const res3 = await axios.get('https://api.cyberedu.ro/v1/challenge/tags')
        const response3 = res3.data

        response3.forEach((item) => {
            if (item['type'] === 'default') {
                this.tags.add(item['name'])
            }
        })
    }
})

// Section 1
app.component('section-1', {
    // props: [eventName, eventDescription, eventSubdomain],
    template: 
        `<section>
           <br />
            <h6 class="card-subtitle mb-2 text-muted">Between 5 and 20 characters</h6>
           <div class="form-group">
             <input type="text" v-model="eventName" name="eventName" id="eventName" class="form-control" placeholder="Name" minlength="5" maxlength="20" required autofocus>
           </div>
           <br />
           <h6 class="card-subtitle mb-2 text-muted">Between 20 and 500 characters</h6>
           <div class="form-group">
             <textarea type="text" v-model="eventDescription" name="eventDescription" id="eventDescription" class="form-control" placeholder="Description..." 
             rows="3" cols="50" minlength="20" maxlength="500" required></textarea>
           </div>
           <br/>
           <h6 class="card-subtitle mb-2 text-muted">Between 2 and 5 characters</h6>
           <div class="form-group">
             <input type="text" v-model="eventSubdomain" name="eventSubdomain" id="eventSubdomain" class="form-control" placeholder="Subdomain" min="2"  max="5" required>
           </div>
        </section>
    `, 
    data() {
        return {
            eventName: '',
            eventDescription: '',
            eventSubdomain: ''
        }
    },
    methods: {
        showDetails() {
            console.log(this.eventName)
            console.log(this.eventDescription)
            console.log(this.eventSubdomain)
        }
    },
    // Va trebui sa trimit datele astea catre 'Section-4' (la fel si la raspunsurile de la Sectiunea 2 si Sectiunea 3)  
})

// Section 2
app.component('section-2', {
    template: 
    `
    <section>
        <div>
        <h6 class="card-subtitle mb-2 text-muted">Gameplay type</h6>
            <div class="form-check">
            <input class="form-check-input" type="radio" @click="this.gameplayType = 'Individual'" name="gameplayType" id="individual" required>
            <label class="form-check-label" for="individual">
                Individual
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" @click="this.gameplayType = 'Team'" name="gameplayType" id="team">
            <label class="form-check-label" for="team">
                Team
            </label>
            </div>
        </div>
        <br />
        <div>
        <h6 class="card-subtitle mb-2 text-muted">Score type</h6>
            <div class="form-check">
            <input class="form-check-input" type="radio" @click="this.scoreType= 'Dynamic'" name="scoreType" id="dynamic" required>
            <label class="form-check-label" for="dynamic">
                Dynamic
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" @click="this.scoreType= 'Flat'" name="scoreType" id="flat">
            <label class="form-check-label" for="flat">
                Flat
            </label>
            </div>
        </div>
        <br />
            <div class="dates">
                    <label class="card-subtitle mb-2 text-muted" for="startDate">From:</label>
                    <input type="date" id="startDate" name="startDate" v-model="startDate" required/>

                    <label class="card-subtitle mb-2 text-muted" for="endDate">To:</label>
                    <input type="date" id="endDate" name="endDate" v-model="endDate" required/>
            </div>
        <div>
        <h6 class="card-subtitle mb-2 text-muted">Number of Players</h6>
        <input type="number" id="playersNumber" name="numberPlayers" v-model="numberPlayers" min="2" max="10" required>
        </div>
        <br />
        <div>
        <h6 class="card-subtitle mb-2 text-muted">Accessibility</h6>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="accessType" @click="this.private = false" id="public" required>
            <label class="form-check-label" for="public">
                Public
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="accessType" @click="this.private = true" id="private">
            <label class="form-check-label" for="private">
                <!-- Bug atunci cand apesi pe buton, trebuie sa apesi de doua ori -->
                Private
            </label>
            </div>
            <div id="privatePassword" v-if="private">
            <h6 class="card-subtitle mb-2 text-muted">Set Password:</h6>
            <input type="password" v-model="password" width="10" height="2" style="width: 200px;" maxlength="20">
            </div>
        </div>
    </section>
    <button @click="getInfo">Get info</button>
    `,
    data() {
        return {
            gameplayType: '',
            scoreType: '',
            // Pentru date putem folosi si 'new Date Object' sau diferite librarii, insa am sa optimizez acest lucru mai tarziu
            startDate: '',
            endDate: '',
            numberPlayers: '',
            private: false,
            // As putea adauga password validation de asemenea, daca e necesar
            password: null
        }
    },
    methods: {
        getInfo() {
            console.log(this.gameplayType)
            console.log(this.scoreType)
            console.log(this.startDate)
            console.log(this.endDate)
            console.log(this.numberPlayers)
            console.log(this.private)
            console.log(this.password)
        },
    }
})

app.mount('#app')