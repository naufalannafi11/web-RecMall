
      // JavaScript to toggle mobile menu visibility
      document.getElementById('mobileMenuButton').addEventListener('click', function () {
          document.getElementById('mobileMenu').classList.toggle('hidden');
      });
      

      function openModal(id) {
        const modal = document.getElementById(`mallDetailModal${id}`);
        if (modal) {
          modal.classList.remove('hidden');
        }
      }
    
      function closeModal(id) {
        const modal = document.getElementById(`mallDetailModal${id}`);
        if (modal) {
          modal.classList.add('hidden');
        }
      };

      
      

      document.addEventListener('DOMContentLoaded', function () {
        for (let i = 1; i <= 8; i++) {
          const modalTrigger = document.getElementById(`openModal${i}`);
          const closeModalTrigger = document.getElementById(`closeModal${i}`);
    
          if (modalTrigger) {
            modalTrigger.addEventListener('click', () => openModal(i));
          }
    
          if (closeModalTrigger) {
            closeModalTrigger.addEventListener('click', () => closeModal(i));
          }
        }
      });

      
