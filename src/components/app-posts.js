// eslint-disable-next-line
Vue.component('app-posts', {
    template: `
        <app-post :posts="shuffle(posts)" />
    `,
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: '1 Lorem Ipsum is simply dummy text', 
                    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    listItem: `<li class="posts__list-item">Lorem Ipsum has been the industry's</li>
                    <li class="posts__list-item">Standard dummy text ever since</li>
                    <li class="posts__list-item">But also the leap into electronic typesetting</li>`
                },
                {
                    id: 2,
                    title: '2 Lorem Ipsum is simply dummy text', 
                    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    listItem: `<li class="posts__list-item">Lorem Ipsum has been the industry's</li>
                    <li class="posts__list-item">Standard dummy text ever since</li>
                    <li class="posts__list-item">But also the leap into electronic</li>
                    <li class="posts__list-item">It was popularised in the 1960s</li>`
                },
                {
                    id: 3,
                    title: '3 Lorem Ipsum is simply dummy text', 
                    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    listItem: `<li class="posts__list-item">Lorem Ipsum has been the industry's</li>
                    <li class="posts__list-item">Standard dummy text ever since</li>
                    <li class="posts__list-item">But also the leap into electronic typesetting</li>`
                },
                {
                    id: 4,
                    title: '4 Lorem Ipsum simply', 
                    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    listItem: `<li class="posts__list-item">Lorem Ipsum has been the industry's</li>
                    <li class="posts__list-item">Standard dummy text ever since</li>
                    <li class="posts__list-item">But also the leap into electronic typesetting</li>`
                },
                {
                    id: 5,
                    title: '5 Lorem Ipsum simply', 
                    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    listItem: `<li class="posts__list-item">Lorem Ipsum has been the industry's</li>
                    <li class="posts__list-item">Standard dummy text ever since</li>
                    <li class="posts__list-item">But also the leap into electronic typesetting</li>`
                },
            ]
        };
    },
    methods: {
        shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
        }
    },
    components: {
        'app-post': {
          template: `
            <div class="posts__wrapper">
                <div v-for="post in posts" :key="post.title" class="posts__item">
                    <div class="posts__pic"></div>
                    <div class="posts__title"> {{ post.title }} </div>
                    <div class="posts__desc"> {{ post.desc }} </div>
                    <ul class="posts__list" v-html="post.listItem">
                    </ul>
                </div>
            </div>
          `,
          props: ['posts']
        }
    }
});
  