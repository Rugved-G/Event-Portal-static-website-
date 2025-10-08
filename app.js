// === Event Portal (No Login Version) ===
const LS_KEY = 'event_portal_v2';
const btnAdd = document.getElementById('btnAdd');
const modal = document.getElementById('modal');
const form = document.getElementById('eventForm');
const eventsGrid = document.getElementById('eventsGrid');
const tpl = document.getElementById('cardTpl');
const filterTypes = document.querySelectorAll('.filter-type');
const ageRadios = document.getElementsByName('age');
const locSelect = document.getElementById('filterLocation');
let editId = null;

// --- Local Storage Helpers ---
function load() { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); }
function save(arr) { localStorage.setItem(LS_KEY, JSON.stringify(arr)); }
function uid() { return 'id_' + Math.random().toString(36).slice(2, 9); }

// --- Seed Initial Data ---
function seed() {
  if (!localStorage.getItem(LS_KEY)) {
    save([
      {
        id: uid(),
        title: 'Rock Concert',
        type: 'Music',
        venue: 'Stadium',
        location: 'Mumbai',
        age: '18+',
        dateTime: '2025-11-10T19:00',
        imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600',
        description: 'Rock night!',
        seats: 500
      },
      {
        id: uid(),
        title: 'Football Finals',
        type: 'Sports',
        venue: 'Arena',
        location: 'Delhi',
        age: 'All',
        dateTime: '2025-10-20T17:00',
        imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',
        description: 'National league final.',
        seats: 300
      }
    ]);
  }
}

// --- Render Events ---
function render() {
  const data = load();
  const activeTypes = [...filterTypes].filter(x => x.checked).map(x => x.value);
  const age = [...ageRadios].find(x => x.checked)?.value;
  const loc = locSelect.value;

  const filtered = data.filter(e => {
    const typeOK = activeTypes.length ? activeTypes.includes(e.type) : true;
    const ageOK = (age === 'All' || e.age === age);
    const locOK = loc ? e.location === loc : true;
    return typeOK && ageOK && locOK;
  });

  eventsGrid.innerHTML = '';
  filtered.forEach(e => {
    const node = tpl.content.cloneNode(true);
    const card = node.querySelector('.card');
    card.querySelector('.thumb').src = e.imageUrl || 'https://via.placeholder.com/400x200';
    card.querySelector('.title').textContent = e.title;
    card.querySelector('.meta').textContent = `${e.type} | ${e.location} | ${new Date(e.dateTime).toLocaleString()}`;
    card.querySelector('.desc').textContent = e.description;

    const actions = card.querySelector('.card-actions');
    const regBtn = document.createElement('a');
    regBtn.className = 'btn primary';
    regBtn.textContent = 'Register';
    regBtn.href = googleFormLink(e);
    regBtn.target = '_blank';
    actions.appendChild(regBtn);

    // Edit/Delete available to everyone now
    const editBtn = document.createElement('button');
    editBtn.className = 'btn';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editEvent(e.id);
    actions.appendChild(editBtn);

    const delBtn = document.createElement('button');
    delBtn.className = 'btn danger';
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => deleteEvent(e.id);
    actions.appendChild(delBtn);

    eventsGrid.appendChild(node);
  });
}

// --- Helpers ---
function googleFormLink(e) {
  return 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.123=' + encodeURIComponent(e.title);
}

function openModal() { modal.classList.remove('hidden'); }
function closeModal() { modal.classList.add('hidden'); form.reset(); }

// --- Add Event ---
btnAdd.addEventListener('click', () => {
  editId = null;
  openModal();
});

// --- Save Event ---
form.addEventListener('submit', ev => {
  ev.preventDefault();
  const obj = Object.fromEntries(new FormData(form).entries());
  obj.id = editId || uid();
  const data = load();
  if (editId) {
    const i = data.findIndex(x => x.id === editId);
    data[i] = obj;
  } else {
    data.push(obj);
  }
  save(data);
  closeModal();
  render();
});

// --- Edit/Delete ---
function editEvent(id) {
  const e = load().find(x => x.id === id);
  editId = id;
  for (const k in e) { if (form[k]) form[k].value = e[k]; }
  openModal();
}

function deleteEvent(id) {
  if (!confirm('Delete this event?')) return;
  const arr = load().filter(x => x.id !== id);
  save(arr);
  render();
}

document.getElementById('btnCancel').addEventListener('click', closeModal);

// --- Filters ---
[...filterTypes, ...ageRadios, locSelect].forEach(el =>
  el.addEventListener('change', render)
);

// --- Sidebar Toggle ---
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

// --- Init ---
seed();
render();

// --- Opening Animation ---
window.addEventListener('load', () => {
  const splash = document.getElementById('openingAnimation');
  setTimeout(() => splash.remove(), 4000); // Remove after animation
});
