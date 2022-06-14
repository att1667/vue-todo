<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>TODO 리스트</h4>
            <ul class="list-group">
                <li class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(tutorial, index) in tutorials"
                :key="index"
                >
                    {{tutorial.title}}
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <div>
                <tutorial-details />
            </div>
            <div>
                <br/>
                <p>자세히 보기</p>
            </div>
        </div>
    </div>
</template>

<script>
import TutorialDataServices from '@/services/TutorialDataServices'
export default {
    name: "tutorials-list",
    data() {
        return {
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
            unsubscribe: null
        }    
    },
    methods: {
        onDataChange(items){
            let _tutorials = [];
            items.forEach((item) => {
                let id = item.id;
                let data = item.data();
                _tutorials.push({
                    id: id,
                    title: data.title,
                    description: data.description,
                    published: data.published
                })
            });
            this.tutorials = _tutorials
        },
        refreshList(){
            this.currentTutorial = null;
            this.currentIndex = -1;
        },
        setActiveTutorial(tutorial, index){
            this.currentTutorial = tutorial;
            this.currentIndex = index;
        }
    },
    mounted() {
        this.unsubscribe = TutorialDataServices.gettAll().orderBy("title", "asc").onSnapshot(this.onDataChange)
    }
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>