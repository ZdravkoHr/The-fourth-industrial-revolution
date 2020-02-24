const section = document.querySelector('section.gallery');
const overlay = document.querySelector('.black-gallery-overlay');
const galleryContainer = document.querySelector('.gallery-container');
const closeIcon_gallery = document.querySelector('.gallery-container .close-icon');
const currentImg_container = document.querySelector('.gallery-container .current-img img');
const currentInfo_para = document.querySelector('.gallery-container .current-info');
const prevIcon = document.querySelector('.gallery-container .go-icon-back');
const nextIcon = document.querySelector('.gallery-container .go-icon-forward');
const images = [
    {
        path: '../media/1st\ rev\ pics/1st.jpeg',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, ea laboriosam? Saepe, veniam. Laboriosam minus nisi velit, ea officia nostrum necessitatibus distinctio quas dolor maiores neque nam molestias officiis facilis culpa sint iusto commodi. Maxime pariatur omnis recusandae velit eveniet at qui necessitatibus, quaerat debitis, iste odit nostrum. Ea expedita maxime deleniti atque error nostrum iure placeat officiis quas similique amet sed modi ullam, neque unde molestiae doloremque itaque? Ab commodi accusantium obcaecati quia at laborum consequatur explicabo labore consectetur doloribus quisquam perferendis vel harum repellendus numquam sint, voluptatem voluptates non totam corporis. Animi unde laboriosam deleniti iste tempore nemo voluptate eveniet officiis cum vel, quas rerum laudantium maiores necessitatibus distinctio rem modi. Pariatur minus earum enim unde consequatur accusantium velit nesciunt nostrum exercitationem in alias, iste molestiae voluptas eaque consectetur perferendis fugiat dicta tempora eius dolore? Laudantium illo illum fuga, ipsum quo vel voluptatem cupiditate. Expedita eius enim natus itaque quo, nisi voluptates voluptatum aperiam necessitatibus maiores fugit quia quis suscipit fuga repellendus molestias. Necessitatibus veniam maiores cum modi dolorem quidem voluptates distinctio dicta, soluta accusamus. Nihil pariatur corrupti dolorem labore neque iure, impedit aspernatur fuga id ullam in, dolore ipsam doloremque maxime hic esse commodi culpa eos adipisci nesciunt maiores nobis? Soluta magnam rerum deleniti rem tenetur quo cupiditate vel minima quae quam enim numquam libero totam, unde incidunt quod labore dolorem harum illum eius! Blanditiis mollitia ipsa aliquam voluptas autem, modi ullam sit ratione architecto corporis ut id asperiores veniam sapiente saepe iusto provident reprehenderit dolor voluptate error placeat illo at. Obcaecati repellendus reiciendis error fuga, id voluptate eveniet iste! Illo doloribus quia ab! Iure alias labore amet eveniet nemo? Eveniet consequuntur nemo fugiat animi cumque amet quae odit harum expedita unde, aliquam ea deleniti velit, necessitatibus nesciunt, impedit libero sunt nihil in dolor consequatur? Praesentium quis, et accusantium totam eius dolorem voluptas fugit. Doloribus explicabo libero velit, omnis deleniti consectetur quas debitis ut facilis quidem nemo itaque ea doloremque repellat facere eos optio laborum atque nulla culpa. Excepturi eveniet sapiente reprehenderit at aliquid quam recusandae aut nobis iste et debitis similique mollitia blanditiis, doloribus ipsa corporis culpa perferendis laudantium laboriosam ab inventore iusto? Nisi autem quisquam aliquam quaerat enim omnis voluptates harum a. Rem, incidunt magni saepe similique exercitationem amet ducimus pariatur unde quisquam vitae optio quod, necessitatibus eligendi praesentium molestias a? Amet, aperiam doloremque, harum iste dicta nostrum commodi illum repellendus totam reprehenderit tempore asperiores, numquam veritatis vel ipsam! Commodi, blanditiis! Similique, reiciendis magni. Earum odit totam repudiandae error corrupti libero eaque, veniam reiciendis. Quia sequi repudiandae minima provident nihil eum debitis quibusdam blanditiis aliquam? Aliquid harum dolores consectetur numquam distinctio iure dignissimos. Facilis non sit explicabo totam qui voluptatum veritatis eius quod, unde, ex, laboriosam eum officia cumque quae dignissimos. Doloremque, soluta esse vitae illum sunt voluptates voluptatum consequuntur a natus hic nemo ex inventore, rerum praesentium reiciendis nobis autem eveniet minus vero labore eaque nesciunt ullam. Esse aliquam vitae velit, fugit consequuntur tempore quaerat voluptates architecto optio iure praesentium quae ullam commodi, laudantium necessitatibus culpa asperiores laboriosam et minima voluptatum ipsam sint a quibusdam? Ratione unde autem vero eum sed magni voluptatum laudantium beatae facilis facere veniam eligendi laboriosam pariatur recusandae esse, quidem corrupti ab, dolore nulla. Dignissimos ex ipsam quis quam incidunt dolores deserunt aliquid unde tempora corporis enim veniam est cum vero eaque minus libero ab, distinctio maiores quia accusantium? Minus, sapiente, quo corrupti nesciunt culpa veritatis aspernatur porro consequuntur harum blanditiis quasi voluptatibus asperiores nihil molestiae at ab in commodi esse et quaerat adipisci soluta! Unde eaque sequi neque esse optio quos quam laudantium debitis iusto recusandae quibusdam saepe nostrum, earum, possimus odit expedita ducimus magni natus nam ipsum nisi assumenda dolores. Corrupti iure mollitia asperiores sunt? Blanditiis reprehenderit architecto corrupti dolore dolorum facilis, deleniti iste molestiae quod incidunt voluptatibus cupiditate! Incidunt nobis dolor perferendis exercitationem vitae nostrum magni officia quo obcaecati, perspiciatis quam necessitatibus animi, eos sed, officiis hic. Expedita, accusantium ut? Non, soluta. Necessitatibus, ut laborum dignissimos ab libero suscipit architecto dolorum velit delectus praesentium molestiae corporis vero dolorem doloremque in facilis quaerat. Quo accusamus qui rerum ipsa ad? Temporibus, sit rerum sint magnam in enim non natus excepturi sed. Harum voluptatum deleniti ex expedita exercitationem? Temporibus autem, quo quae quaerat ratione perspiciatis. Expedita illo quaerat officia ipsam dolorem nam vitae ex voluptatum doloribus eligendi optio suscipit molestiae similique laboriosam, fugit autem. Quas ab earum ipsum quaerat qui veritatis cum debitis pariatur ipsa, dolorum, eligendi accusantium delectus commodi facilis possimus placeat quidem officia unde animi consequuntur error atque at. Eius saepe omnis exercitationem sit asperiores quis, dolorum rerum maxime expedita voluptates mollitia enim, eveniet quaerat non explicabo placeat officiis consequatur porro animi nemo ipsa totam iure. Qui placeat itaque ab dolorum expedita id velit quaerat explicabo, delectus, reiciendis distinctio dolorem earum non animi accusantium quasi? Hic, iusto. Deleniti, tempora magnam! Quisquam omnis quos magnam optio repudiandae possimus unde illo molestias delectus fugiat velit rerum quasi illum expedita, fuga porro. Sed rerum est doloremque assumenda optio obcaecati saepe officiis magnam, fugit architecto fuga reprehenderit neque, incidunt recusandae debitis molestiae ipsa vitae iste repudiandae qui reiciendis laborum. Et nostrum odit, aspernatur quos recusandae autem. Nobis nostrum enim dolorum voluptate. Sed nemo id, fugit nulla assumenda alias doloribus corrupti perspiciatis fugiat? Sed quia quasi dolores unde rem consequatur, blanditiis est enim obcaecati voluptatem natus, harum exercitationem ipsa, sequi suscipit ratione. Minus maiores accusamus illum aut corporis quis doloremque accusantium! Laudantium modi inventore nam autem, recusandae necessitatibus, rerum maiores soluta veritatis, accusamus animi? Quidem perferendis consequuntur suscipit reprehenderit doloremque, ut eaque adipisci error eos veritatis cum rem minima fugit at quis non animi dolor! Libero magnam vitae commodi aspernatur molestiae temporibus reprehenderit, id beatae quasi perferendis debitis facere ut, reiciendis impedit officiis eos corporis hic ad voluptas, suscipit esse porro atque? Sit maxime accusamus aut dicta similique ratione amet nemo magnam tenetur, velit explicabo enim officia quae numquam minima blanditiis quod incidunt vel repellendus eum. Aperiam fugit et id modi beatae praesentium dolorum tempora quasi facilis. Nemo inventore alias ratione eligendi odit.'
    },
    {
        path: '../media/1st\ rev\ pics/1st.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st1.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st-inventions.jpg',
        info: null
    },
    {
        path: '../media/1st\ rev\ pics/1st2.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st5.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st-inventions2.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st34.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st-inventions3.jpg',
        info: 'lorem'
    }
];
let index;

const closeContainer = () => {
    overlay.classList.add('d-none');
}

function openContainer(e) {
    index = e.target.dataset.index;
    const img = images[index];
    overlay.classList.remove('d-none');
    setTimeout(() => center(galleryContainer));
    setImage(img);
}

function setImage(imgInfo) {
    const { path, info } = imgInfo;
    currentImg_container.src = path;
    if (info) {
        galleryContainer.classList.remove('auto-width');
        currentInfo_para.innerHTML = info;
        setTimeout(() => center(galleryContainer));
    }
    else {
        galleryContainer.classList.add('auto-width');
        currentInfo_para.innerHTML = '';
        setTimeout(() => center(galleryContainer));
    }  
}


function goBack() {
    index = --index < 0 ? images.length - 1 : index;
    console.log(index);
    const img = images[index];
    setImage(img);
}

function goForward() {
    index = ++index >= images.length ? 0 : index;
    console.log(index);
    const img = images[index];
    setImage(img);
    
}

section.addEventListener('click', openContainer);
closeIcon_gallery.addEventListener('click', closeContainer);
prevIcon.addEventListener('click', goBack);
nextIcon.addEventListener('click', goForward);

