const dropSection = document.querySelector('.UploadImageContainer_drop_section');
const textElement = document.querySelector('.UploadImageContainer_text');
const subtextElement = document.querySelector('.UploadImageContainer_subtext');

const originalText = textElement.innerHTML;
const originalSubtext = subtextElement.textContent;

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropSection.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropSection.addEventListener('dragenter', () => {
    dropSection.classList.add('UploadImageContainer_drop_section--dragover');
    textElement.innerHTML = '<span class="UploadImageContainer_text_highlight">Drop</span> your image here';
    subtextElement.textContent = 'Release to upload';
});

dropSection.addEventListener('dragleave', () => {
    dropSection.classList.remove('UploadImageContainer_drop_section--dragover');
    textElement.innerHTML = originalText;
    subtextElement.textContent = originalSubtext;
});

dropSection.addEventListener('drop', (e) => {
    dropSection.classList.remove('UploadImageContainer_drop_section--dragover');
    textElement.innerHTML = originalText;
    subtextElement.textContent = originalSubtext;

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        console.log('File dropped:', files[0]);
    }
});