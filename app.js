// Sample events data for demonstration
const SAMPLE_EVENTS = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2026',
    description: 'Join us for an exciting day of technology showcases, keynote speakers from leading tech companies, and networking opportunities with industry professionals. This summit brings together students, faculty, and industry leaders to explore the future of technology.',
    category: 'Academic',
    event_date: '2026-08-15',
    start_time: '09:00',
    end_time: '17:00',
    venue: 'Main Auditorium, Block A',
    image_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 500,
    registered_count: 342,
    organizer: 'Faculty of Innovation & Technology',
    status: 'upcoming',
    featured: true
  },
  {
    id: '2',
    title: 'Inter-Faculty Basketball Tournament',
    description: 'Annual basketball competition between faculties. Come support your faculty team and enjoy a day of competitive sports!</,
    category: 'Sports',
    event_date: '2026-08-20',
    start_time: '10:00',
    end_time: '18:00',
    venue: 'Sports Complex, Indoor Court',
    image_url: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 200,
    registered_count: 145,
    organizer: 'Sports & Recreation Club',
    status: 'upcoming',
    featured: true
  },
  {
    id: '3',
    title: 'Cultural Night: Celebrating Diversity',
    description: 'Experience the rich cultural heritage of our international student community through performances, food, and art. A night to celebrate the diversity that makes Taylor\'s University special.',
    category: 'Cultural',
    event_date: '2026-09-05',
    start_time: '18:00',
    end_time: '22:00',
    venue: 'University Plaza',
    image_url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 300,
    registered_count: 210,
    organizer: 'International Student Society',
    status: 'upcoming',
    featured: true
  },
  {
    id: '4',
    title: 'Python Programming Workshop',
    description: 'A beginner-friendly workshop introducing Python programming. Perfect for students with no prior coding experience. Laptops required.',
    category: 'Workshop',
    event_date: '2026-08-25',
    start_time: '14:00',
    end_time: '17:00',
    venue: 'Computer Lab 3, Block B',
    image_url: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 40,
    registered_count: 38,
    organizer: 'Computer Science Club',
    status: 'upcoming',
    featured: false
  },
  {
    id: '5',
    title: 'Career Fair 2026',
    description: 'Connect with top employers and explore career opportunities. Over 50 companies will be present, offering internships and graduate positions.',
    category: 'Seminar',
    event_date: '2026-09-10',
    start_time: '10:00',
    end_time: '16:00',
    venue: 'Convention Center',
    image_url: 'https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 1000,
    registered_count: 650,
    organizer: 'Career Services Center',
    status: 'upcoming',
    featured: false
  },
  {
    id: '6',
    title: 'Freshman Welcome Party',
    description: 'A fun social gathering to welcome new students. Meet your peers, enjoy free food, games, and music!',
    category: 'Social',
    event_date: '2026-08-12',
    start_time: '18:00',
    end_time: '21:00',
    venue: 'Student Lounge',
    image_url: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 150,
    registered_count: 150,
    organizer: 'Student Council',
    status: 'upcoming',
    featured: false
  },
  {
    id: '7',
    title: 'AI & Machine Learning Seminar',
    description: 'Learn about the latest developments in artificial intelligence and machine learning from industry experts.',
    category: 'Seminar',
    event_date: '2026-08-28',
    start_time: '13:00',
    end_time: '16:00',
    venue: 'Lecture Hall 1, Block C',
    image_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 120,
    registered_count: 89,
    organizer: 'AI Research Group',
    status: 'upcoming',
    featured: false
  },
  {
    id: '8',
    title: 'Business Plan Competition',
    description: 'Present your innovative business ideas and compete for prizes. Open to all students with entrepreneurial spirit!',
    category: 'Academic',
    event_date: '2026-09-15',
    start_time: '09:00',
    end_time: '15:00',
    venue: 'Business School Auditorium',
    image_url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    capacity: 80,
    registered_count: 52,
    organizer: 'Business Faculty',
    status: 'upcoming',
    featured: false
  }
];

// Initialize localStorage with sample data if empty
function initializeData() {
  if (!localStorage.getItem('events')) {
    localStorage.setItem('events', JSON.stringify(SAMPLE_EVENTS));
  }
  if (!localStorage.getItem('registrations')) {
    localStorage.setItem('registrations', JSON.stringify([]));
  }
}

// Application state
let currentView = 'home';
let selectedEvent = null;
let events = [];
let registrations = [];
let selectedCategory = 'all';
let searchQuery = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initializeData();
  loadEvents();
  loadRegistrations();
  renderApp();
}

// Load events from localStorage
function loadEvents() {
  const stored = localStorage.getItem('events');
  events = stored ? JSON.parse(stored) : [];
  // Sort by date
  events.sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
}

// Load registrations from localStorage
function loadRegistrations() {
  const stored = localStorage.getItem('registrations');
  registrations = stored ? JSON.parse(stored) : [];
}

// Save events to localStorage
function saveEvents() {
  localStorage.setItem('events', JSON.stringify(events));
}

// Save registrations to localStorage
function saveRegistrations() {
  localStorage.setItem('registrations', JSON.stringify(registrations));
}

// Render the application
function renderApp() {
  const app = document.querySelector('#app');
  app.innerHTML = getLayout();
  attachEventListeners();
}

// Get main layout
function getLayout() {
  return `
    <div class="app-container">
      ${getHeader()}
      <main class="main-content">
        ${currentView === 'home' ? getHomeView() : ''}
        ${currentView === 'event-detail' ? getEventDetailView() : ''}
        ${currentView === 'create-event' ? getCreateEventView() : ''}
        ${currentView === 'my-registrations' ? getMyRegistrationsView() : ''}
      </main>
      ${getFooter()}
      ${getModal()}
      ${getNotification()}
    </div>
  `;
}

// Header component
function getHeader() {
  return `
    <header class="header">
      <div class="header-content">
        <div class="logo" onclick="window.navigateTo('home')">
          <div class="logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
              <path d="M12 20L18 26L28 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-title">Taylor's University</span>
            <span class="logo-subtitle">Event Management</span>
          </div>
        </div>
        <nav class="nav-menu">
          <button class="nav-item ${currentView === 'home' ? 'active' : ''}" data-view="home">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            <span>Home</span>
          </button>
          <button class="nav-item ${currentView === 'my-registrations' ? 'active' : ''}" data-view="my-registrations">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            <span>My Registrations</span>
          </button>
          <button class="nav-item create-btn" data-view="create-event">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            <span>Create Event</span>
          </button>
        </nav>
      </div>
    </header>
  `;
}

// Home view with event listing
function getHomeView() {
  const featuredEvents = events.filter(e => e.featured && e.status === 'upcoming').slice(0, 3);
  const filteredEvents = getFilteredEvents();

  return `
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Discover Events at <span class="highlight">Taylor's</span></h1>
        <p class="hero-subtitle">Explore, register, and participate in exciting events across campus</p>
      </div>
    </section>

    ${featuredEvents.length > 0 ? `
    <section class="featured-section">
      <h2 class="section-title">
        <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
        Featured Events
      </h2>
      <div class="featured-grid">
        ${featuredEvents.map(event => getFeaturedCard(event)).join('')}
      </div>
    </section>
    ` : ''}

    <section class="events-section">
      <div class="section-header">
        <h2 class="section-title">
          <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          All Events
        </h2>
        <div class="controls">
          <div class="search-box">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" id="search-input" placeholder="Search events..." value="${searchQuery}">
          </div>
          <div class="category-filter">
            <select id="category-select">
              <option value="all" ${selectedCategory === 'all' ? 'selected' : ''}>All Categories</option>
              <option value="Academic" ${selectedCategory === 'Academic' ? 'selected' : ''}>Academic</option>
              <option value="Sports" ${selectedCategory === 'Sports' ? 'selected' : ''}>Sports</option>
              <option value="Cultural" ${selectedCategory === 'Cultural' ? 'selected' : ''}>Cultural</option>
              <option value="Workshop" ${selectedCategory === 'Workshop' ? 'selected' : ''}>Workshop</option>
              <option value="Seminar" ${selectedCategory === 'Seminar' ? 'selected' : ''}>Seminar</option>
              <option value="Social" ${selectedCategory === 'Social' ? 'selected' : ''}>Social</option>
            </select>
          </div>
        </div>
      </div>
      <div class="events-grid">
        ${filteredEvents.length > 0
          ? filteredEvents.map(event => getEventCard(event)).join('')
          : '<div class="no-events"><p>No events found matching your criteria.</p></div>'
        }
      </div>
    </section>
  `;
}

// Filter events based on category and search
function getFilteredEvents() {
  return events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

// Featured event card
function getFeaturedCard(event) {
  const date = new Date(event.event_date);
  const dateStr = date.toLocaleDateString('en-MY', { weekday: 'short', day: 'numeric', month: 'short' });
  const availableSpots = event.capacity - event.registered_count;
  const progress = (event.registered_count / event.capacity) * 100;

  return `
    <article class="featured-card" data-id="${event.id}" onclick="window.showEventDetail('${event.id}')">
      <div class="featured-image-container">
        <img src="${event.image_url}" alt="${event.title}" class="featured-image">
        <div class="featured-badge">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>
          Featured
        </div>
        <div class="category-tag ${event.category.toLowerCase()}">${event.category}</div>
      </div>
      <div class="featured-content">
        <div class="featured-date">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>${dateStr}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="margin-left: 12px">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          <span>${event.start_time.slice(0, 5)} - ${event.end_time.slice(0, 5)}</span>
        </div>
        <h3 class="featured-title">${event.title}</h3>
        <p class="featured-description">${event.description || ''}</p>
        <div class="featured-meta">
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>${event.venue}</span>
          </div>
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>${event.registered_count}/${event.capacity}</span>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${Math.min(progress, 100)}%"></div>
        </div>
        <p class="spots-text ${availableSpots <= 10 ? 'limited' : ''}">
          ${availableSpots > 0 ? `${availableSpots} spots remaining` : 'Fully booked'}
        </p>
      </div>
    </article>
  `;
}

// Regular event card
function getEventCard(event) {
  const date = new Date(event.event_date);
  const dateStr = date.toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' });
  const availableSpots = event.capacity - event.registered_count;
  const progress = (event.registered_count / event.capacity) * 100;
  const statusClass = event.status === 'cancelled' ? 'cancelled' : (availableSpots <= 0 ? 'full' : '');

  return `
    <article class="event-card ${statusClass}" data-id="${event.id}" onclick="window.showEventDetail('${event.id}')">
      <div class="card-image-container">
        <img src="${event.image_url || 'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=600'}" alt="${event.title}" class="card-image">
        <div class="category-tag ${event.category.toLowerCase()}">${event.category}</div>
        ${event.status === 'cancelled' ? '<div class="status-overlay cancelled">Cancelled</div>' : ''}
        ${availableSpots <= 0 && event.status !== 'cancelled' ? '<div class="status-overlay full">Fully Booked</div>' : ''}
      </div>
      <div class="card-content">
        <div class="card-date">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>${dateStr}</span>
        </div>
        <h3 class="card-title">${event.title}</h3>
        <div class="card-meta">
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>${event.venue}</span>
          </div>
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <span>${event.start_time.slice(0, 5)}</span>
          </div>
        </div>
        <div class="card-footer">
          <div class="capacity-info">
            <div class="mini-progress">
              <div class="mini-progress-fill" style="width: ${Math.min(progress, 100)}%"></div>
            </div>
            <span class="capacity-text">${event.registered_count}/${event.capacity}</span>
          </div>
          <button class="card-action-btn" onclick="event.stopPropagation(); window.showEventDetail('${event.id}')">
            View Details
          </button>
        </div>
      </div>
    </article>
  `;
}

// Event detail view
function getEventDetailView() {
  if (!selectedEvent) return '';

  const event = selectedEvent;
  const date = new Date(event.event_date);
  const dateStr = date.toLocaleDateString('en-MY', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const availableSpots = event.capacity - event.registered_count;
  const progress = (event.registered_count / event.capacity) * 100;
  const isBookable = availableSpots > 0 && event.status !== 'cancelled';

  return `
    <div class="detail-container">
      <button class="back-btn" onclick="window.navigateTo('home')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12,19 5,12 12,5"/>
        </svg>
        Back to Events
      </button>

      <div class="detail-content">
        <div class="detail-hero">
          <div class="detail-image-container">
            <img src="${event.image_url || 'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1200'}" alt="${event.title}" class="detail-image">
            ${event.featured ? '<div class="featured-badge-detail"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg> Featured Event</div>' : ''}
            <div class="category-tag-detail ${event.category.toLowerCase()}">${event.category}</div>
          </div>
        </div>

        <div class="detail-info">
          <div class="detail-main">
            <h1 class="detail-title">${event.title}</h1>
            <p class="detail-description">${event.description || 'No description available.'}</p>

            <div class="detail-grid">
              <div class="detail-item">
                <div class="detail-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div class="detail-item-content">
                  <span class="detail-item-label">Date</span>
                  <span class="detail-item-value">${dateStr}</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div class="detail-item-content">
                  <span class="detail-item-label">Time</span>
                  <span class="detail-item-value">${event.start_time.slice(0, 5)} - ${event.end_time.slice(0, 5)}</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="detail-item-content">
                  <span class="detail-item-label">Venue</span>
                  <span class="detail-item-value">${event.venue}</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div class="detail-item-content">
                  <span class="detail-item-label">Organizer</span>
                  <span class="detail-item-value">${event.organizer}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="detail-sidebar">
            <div class="registration-card">
              <div class="registration-header">
                <h3>Registration</h3>
                <div class="price-tag">Free</div>
              </div>

              <div class="capacity-display">
                <div class="capacity-progress">
                  <div class="capacity-progress-bar">
                    <div class="capacity-progress-fill" style="width: ${Math.min(progress, 100)}%"></div>
                  </div>
                  <span class="capacity-count">${event.registered_count}/${event.capacity}</span>
                </div>
                <p class="spots-remaining ${availableSpots <= 10 ? 'limited' : ''}">
                  ${availableSpots > 0 ? `${availableSpots} spots remaining` : 'Fully booked'}
                </p>
              </div>

              <button class="register-btn ${!isBookable ? 'disabled' : ''}"
                      onclick="${isBookable ? `window.openRegistrationModal('${event.id}')` : ''}"
                      ${!isBookable ? 'disabled' : ''}>
                ${event.status === 'cancelled' ? 'Event Cancelled' : (availableSpots > 0 ? 'Register Now' : 'Fully Booked')}
              </button>

              <div class="registration-footer">
                <p>Secure your spot by registering today!</p>
              </div>
            </div>

            <div class="share-card">
              <h4>Share this event</h4>
              <div class="share-buttons">
                <button class="share-btn" onclick="window.shareEvent('twitter')">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.15z"/>
                  </svg>
                </button>
                <button class="share-btn" onclick="window.shareEvent('facebook')">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button class="share-btn" onclick="window.copyEventLink()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Create event view
function getCreateEventView() {
  return `
    <div class="create-container">
      <button class="back-btn" onclick="window.navigateTo('home')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12,19 5,12 12,5"/>
        </svg>
        Back to Events
      </button>

      <div class="create-content">
        <div class="create-header">
          <h1>Create New Event</h1>
          <p>Fill in the details below to create a new event for Taylor's University</p>
        </div>

        <form id="create-event-form" class="create-form">
          <div class="form-section">
            <h3>Basic Information</h3>
            <div class="form-grid">
              <div class="form-group full-width">
                <label for="event-title">Event Title *</label>
                <input type="text" id="event-title" name="title" required placeholder="Enter event title">
              </div>

              <div class="form-group full-width">
                <label for="event-description">Description</label>
                <textarea id="event-description" name="description" rows="4" placeholder="Describe your event"></textarea>
              </div>

              <div class="form-group">
                <label for="event-category">Category *</label>
                <select id="event-category" name="category" required>
                  <option value="">Select category</option>
                  <option value="Academic">Academic</option>
                  <option value="Sports">Sports</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Social">Social</option>
                </select>
              </div>

              <div class="form-group">
                <label for="event-capacity">Capacity *</label>
                <input type="number" id="event-capacity" name="capacity" required min="1" max="10000" value="100">
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3>Date & Time</h3>
            <div class="form-grid">
              <div class="form-group">
                <label for="event-date">Event Date *</label>
                <input type="date" id="event-date" name="event_date" required>
              </div>

              <div class="form-group">
                <label for="event-start-time">Start Time *</label>
                <input type="time" id="event-start-time" name="start_time" required>
              </div>

              <div class="form-group">
                <label for="event-end-time">End Time *</label>
                <input type="time" id="event-end-time" name="end_time" required>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3>Location & Organizer</h3>
            <div class="form-grid">
              <div class="form-group full-width">
                <label for="event-venue">Venue *</label>
                <input type="text" id="event-venue" name="venue" required placeholder="e.g., Main Auditorium, Block A">
              </div>

              <div class="form-group full-width">
                <label for="event-organizer">Organizer *</label>
                <input type="text" id="event-organizer" name="organizer" required placeholder="e.g., Faculty of Innovation">
              </div>

              <div class="form-group full-width">
                <label for="event-image">Image URL</label>
                <input type="url" id="event-image" name="image_url" placeholder="https://example.com/image.jpg">
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn-secondary" onclick="window.navigateTo('home')">Cancel</button>
            <button type="submit" class="btn-primary">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// My registrations view
function getMyRegistrationsView() {
  return `
    <div class="registrations-container">
      <div class="registrations-header">
        <h1>My Registrations</h1>
        <p>View and manage your event registrations</p>
      </div>

      <div class="email-filter">
        <label for="registrations-email">Enter your email to view your registrations:</label>
        <div class="email-input-group">
          <input type="email" id="registrations-email" placeholder="your@email.com">
          <button class="btn-primary" onclick="window.loadMyRegistrations()">Find Registrations</button>
        </div>
      </div>

      <div id="registrations-list" class="registrations-list">
        <p class="no-registrations-text">Enter your email above to view your registrations.</p>
      </div>
    </div>
  `;
}

// Modal component
function getModal() {
  return `
    <div id="modal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modal-title">Register for Event</h2>
          <button class="modal-close" onclick="window.closeModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div id="modal-body" class="modal-body">
          <!-- Modal content will be injected here -->
        </div>
      </div>
    </div>
  `;
}

// Notification component
function getNotification() {
  return `
    <div id="notification" class="notification">
      <span id="notification-message"></span>
    </div>
  `;
}

// Footer component
function getFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
              <path d="M12 20L18 26L28 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span>Taylor's University</span>
        </div>
        <p class="footer-text">Empowering students through events and experiences.</p>
        <p class="footer-copyright">© 2026 Taylor's University. All rights reserved.</p>
      </div>
    </footer>
  `;
}

// Attach event listeners
function attachEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const view = e.currentTarget.dataset.view;
      navigateTo(view);
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderApp();
    });
  }

  // Category filter
  const categorySelect = document.getElementById('category-select');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      selectedCategory = e.target.value;
      renderApp();
    });
  }

  // Create event form
  const createForm = document.getElementById('create-event-form');
  if (createForm) {
    createForm.addEventListener('submit', handleCreateEvent);

    // Set min date to today
    const dateInput = document.getElementById('event-date');
    if (dateInput) {
      dateInput.min = new Date().toISOString().split('T')[0];
    }
  }
}

// Navigation function
window.navigateTo = function(view) {
  currentView = view;
  if (view !== 'event-detail') {
    selectedEvent = null;
  }
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Show event detail
window.showEventDetail = function(eventId) {
  selectedEvent = events.find(e => e.id === eventId);
  if (selectedEvent) {
    currentView = 'event-detail';
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// Open registration modal
window.openRegistrationModal = function(eventId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <form id="registration-form" class="registration-form">
      <p class="modal-subtitle">Complete the form below to register for this event</p>

      <div class="form-group">
        <label for="reg-name">Full Name *</label>
        <input type="text" id="reg-name" name="name" required placeholder="Enter your full name">
      </div>

      <div class="form-group">
        <label for="reg-email">Email Address *</label>
        <input type="email" id="reg-email" name="email" required placeholder="your@email.com">
      </div>

      <div class="form-group">
        <label for="reg-phone">Phone Number</label>
        <input type="tel" id="reg-phone" name="phone" placeholder="+60 12-345-6789">
      </div>

      <div class="form-group">
        <label for="reg-student-id">Student ID (if applicable)</label>
        <input type="text" id="reg-student-id" name="student_id" placeholder="e.g., 2023123456">
      </div>

      <input type="hidden" name="event_id" value="${eventId}">

      <div class="form-actions">
        <button type="button" class="btn-secondary" onclick="window.closeModal()">Cancel</button>
        <button type="submit" class="btn-primary">Confirm Registration</button>
      </div>
    </form>
  `;

  const form = document.getElementById('registration-form');
  form.addEventListener('submit', handleRegistration);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close modal
window.closeModal = function() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
};

// Handle registration submission
function handleRegistration(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Check if already registered
  const existing = registrations.find(r => r.event_id === data.event_id && r.email === data.email);
  if (existing) {
    showNotification('You are already registered for this event!', 'warning');
    return;
  }

  // Check if spots available
  const event = events.find(e => e.id === data.event_id);
  if (!event) {
    showNotification('Event not found!', 'error');
    return;
  }

  if (event.registered_count >= event.capacity) {
    showNotification('Sorry, this event is fully booked!', 'error');
    return;
  }

  // Create registration
  const newRegistration = {
    id: Date.now().toString(),
    event_id: data.event_id,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    student_id: data.student_id || null,
    registered_at: new Date().toISOString()
  };

  registrations.push(newRegistration);
  saveRegistrations();

  // Update registered count
  event.registered_count += 1;
  saveEvents();

  // Update selected event if viewing
  if (selectedEvent && selectedEvent.id === data.event_id) {
    selectedEvent = event;
  }

  window.closeModal();
  showNotification('Successfully registered!', 'success');
  renderApp();
}

// Handle create event
function handleCreateEvent(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const newEvent = {
    id: Date.now().toString(),
    title: data.title,
    description: data.description || null,
    category: data.category,
    event_date: data.event_date,
    start_time: data.start_time,
    end_time: data.end_time,
    venue: data.venue,
    image_url: data.image_url || null,
    capacity: parseInt(data.capacity),
    registered_count: 0,
    organizer: data.organizer,
    status: 'upcoming',
    featured: false
  };

  events.push(newEvent);
  saveEvents();

  showNotification('Event created successfully!', 'success');
  navigateTo('home');
}

// Load my registrations
window.loadMyRegistrations = function() {
  const emailInput = document.getElementById('registrations-email');
  const email = emailInput.value.trim();

  if (!email) {
    showNotification('Please enter your email address', 'warning');
    return;
  }

  const listContainer = document.getElementById('registrations-list');
  const userRegistrations = registrations.filter(r => r.email === email);

  if (userRegistrations.length === 0) {
    listContainer.innerHTML = `
      <div class="no-registrations">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
        </svg>
        <p>No registrations found for this email.</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = userRegistrations.map(reg => {
    const event = events.find(e => e.id === reg.event_id);
    if (!event) return '';

    const date = new Date(event.event_date);
    const dateStr = date.toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' });
    const regDate = new Date(reg.registered_at);
    const regDateStr = regDate.toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' });

    return `
      <div class="registration-card-item" onclick="window.showEventDetail('${event.id}')">
        <div class="registration-card-image">
          <img src="${event.image_url || 'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=300'}" alt="${event.title}">
          <div class="category-tag-mini ${event.category.toLowerCase()}">${event.category}</div>
        </div>
        <div class="registration-card-content">
          <h4>${event.title}</h4>
          <div class="registration-details">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${dateStr}</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${event.venue}</span>
          </div>
          <div class="registration-meta">
            <span class="registration-badge">Registered</span>
            <span class="registration-date">on ${regDateStr}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.getElementById('notification');
  const messageEl = document.getElementById('notification-message');

  messageEl.textContent = message;
  notification.className = `notification ${type} active`;

  setTimeout(() => {
    notification.classList.remove('active');
  }, 4000);
}

// Share functionality
window.shareEvent = function(platform) {
  if (!selectedEvent) return;

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(selectedEvent.title);

  const urls = {
    twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
  };

  window.open(urls[platform], '_blank', 'width=600,height=400');
};

window.copyEventLink = function() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showNotification('Link copied to clipboard!', 'success');
  });
};

// Make showNotification available globally
window.showNotification = showNotification;
