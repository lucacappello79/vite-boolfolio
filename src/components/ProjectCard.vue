<script>
export default {
    name: 'ProjectCard',

    data() {
        return {

            baseUrl: 'http://127.0.0.1:8000/',

        }
    },

    props: {

        project: Object,
    },

    computed: {

        shortContent() {
            if (this.project.content.length > 40) {
                return this.project.content.substring(0, 40) + '...';
            } else {
                return this.project.content;
            }
        },

        insertCoverImage() {
            if (this.project.cover_image == null) {

                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"

            } else {

                return this.baseUrl + 'storage/' + this.project.cover_image;

            }
        },

    },


}

</script>


<template>
    <div class="card project" style="width: 18rem;">
        <img :src="insertCoverImage" class="card-img-top cover-image" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <!-- this might work instead of this one below but i have to try it -->
            <!-- <small>Type: {{ project.type?.name }}</small> -->
            <small>Type: {{ project.type ? project.type.name : 'undefined' }}</small>

            <div class="technologies">
                <span v-for="item in project.technologies" class="badge rounded-pill"
                    :style="{ backgroundColor: item.color }">{{ item.name }}</span>
            </div>
            <p class="card-text">{{ shortContent }}</p>
            <a href="#" class="btn btn-primary">Link TBD</a>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.project.card {

    .cover-image {

        height: 150px;
        object-fit: cover;
        object-position: center;
    }

    .technologies {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
        // overflow-x: scroll;
        padding: 4px 2px;
    }

}
</style>
