import VanillaTester from '../plugins/VanillaTester';
import SassyModal from '../plugins/SassyModal';

const tester = new VanillaTester();

// Test Modal
tester.test('Test if all the modals on the page can open and close!', () => {
    const triggers = document.querySelectorAll('[data-modal-trigger]');
    const closers = document.querySelectorAll('[data-modal-close]');

    const event = new Event('click', {bubbles: true, cancelable: true});
    event.preventDefault();

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-modal-trigger');
            const modal = document.querySelector(`[data-modal-id=${modalId}]`);
            modal.classList.add('show-modal');
            tester.assert([...modal.classList].includes('show-modal'));
            modal.classList.remove('show-modal');
            // For visual testing. Allows you to see the modal open for 3 sec
            // setTimeout(() => {
            //     modal.classList.remove('show-modal');
            // }, 3000);
        });
        trigger.dispatchEvent(event);
    });
});

// Test SassyModal plugin
tester.test('SassyModal. Test if openModal() and closeModal() methods work!', () => {
    const modal = new SassyModal();

    let targetModal;

    modal.openModal({ modalID: 'modal-one' });
    targetModal = document.querySelector(`[data-modal-id=modal-one]`);
    tester.assert([...targetModal.classList].includes('show-modal'));
    modal.closeModal({ modalID: 'modal-one' });

    modal.openModal({ modalID: 'modal-two' });
    targetModal = document.querySelector(`[data-modal-id=modal-two]`);
    tester.assert([...targetModal.classList].includes('show-modal'));
    modal.closeModal({ modalID: 'modal-two' });
});
