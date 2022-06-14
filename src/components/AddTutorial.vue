<template>
  <div class="submit-form">
    <div v-if="!submitted">
        <div class="form-group">
            <label for="title">제목</label>
            <input 
            type="text"
            class="form-control"
            id="title"
            required
            name="title"
            v-model="tutorial.title"
            >
        </div>
         <div class="form-group">
            <label for="description">내용</label>
            <input 
            type="text"
            class="form-control"
            id="description"
            required
            name="description"
            v-model="tutorial.description"
            >
        </div>
        <button @click="saveTutorial" class="btn btn-success">저장</button>
    </div>
    <div v-else>
        <h4>성공적으로 저장되었습니다.</h4>
        <button @click="newTutorial" class="btn btn-success">추가</button>
    </div>
  </div>
</template>

<script>
import TutorialDataServices from '@/services/TutorialDataServices';
export default {
    name: "addTutorial",
    data() {
        return {
            tutorial: {
                title: "",
                description: "",
                // published는 default로 false
                published: false
            },
            submitted: false
        }
    },
    methods: {
        saveTutorial(){
            var data = {
                title: this.tutorial.title,
                description: this.tutorial.description,
                published: false
            };
            TutorialDataServices.create(data)
            .then(()=>{
                console.log('저장 성공')
                this.submitted = true;
            })
            .catch(e=>{
                console.log(e)
            })
        },
        newTutorial(){
            this.submitted = false;
            this.tutorial = {
                title: "",
                description: "",
                published: false
            }
        }
    }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>