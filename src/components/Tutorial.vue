<template>
    <div v-if="currentTutorial" class="edit-form">
        <h4>TODO 내용</h4>
        <form>
        <div class="form-group">
            <label for="title">제목</label>
            <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentTutorial.title"
            />
        </div>
        <div class="form-group">
            <label for="description">내용</label>
            <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentTutorial.description"
            />
        </div>
        <div class="form-group">
            <label><strong>진행상태:</strong></label>
            {{ currentTutorial.published ? "완료" : "대기중" }}
        </div>
        </form>
        <button
        class="badge badge-primary mr-2"
        v-if="currentTutorial.published"
        @click="updatePublished(false)"
        >
        대기중
        </button>
        <button
        v-else
        class="badge badge-primary mr-2"
        @click="updatePublished(true)"
        >
        진행완료
        </button>
        <button class="badge badge-danger mr-2" @click="deleteTutorial">
        삭제
        </button>
        <button type="submit" class="badge badge-success" @click="updateTutorial">
        수정
        </button>
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br />
        <p>자세히 보기</p>
    </div>
</template>

<script>
import TutorialDataServices from "../services/TutorialDataServices";

export default {
    name: "tutorial-detail",
    props: ["tutorial"],
    data() {
        return {
        currentTutorial: null,
        message: "",
        };
    },
    watch: {
        tutorial: function(tutorial) {
        this.currentTutorial = { ...tutorial };
        this.message = "";
        },
    },
    methods: {
        updatePublished(status) {
        TutorialDataServices.update(this.currentTutorial.id, {
            published: status,
        })
            .then(() => {
            this.currentTutorial.published = status;
            this.message = "상태값 업데이트 성공";
            })
            .catch((e) => {
            console.log(e);
            });
        },
        updateTutorial() {
        const data = {
            title: this.currentTutorial.title,
            description: this.currentTutorial.description,
        };
        TutorialDataServices.update(this.currentTutorial.id, data)
            .then(() => {
            this.message = "업데이트 성공";
            })
            .catch((e) => {
            console.log(e);
            });
        },
        deleteTutorial() {
        TutorialDataServices.delete(this.currentTutorial.id)
            .then(() => {
            this.$emit("refreshList");
            })
            .catch((e) => {
            console.log(e);
            });
        },
    },
    mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
    },
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>