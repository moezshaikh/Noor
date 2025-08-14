import React, { useState, useEffect } from 'react';
import { Upload, Edit2, Lock, Globe, Heart, ShoppingBag, Bell, Moon, Trash2, Camera, Eye, EyeOff } from 'lucide-react';
import '../styles/setting.css';

const SettingsPage = () => {
  const [username, setUsername] = useState('');
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [language, setLanguage] = useState('English');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({ current: '', new: '', confirm: '' });
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false, confirm: false });

  // Load data from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('settings_username');
    const storedLanguage = localStorage.getItem('settings_language');
    const storedNotifications = localStorage.getItem('settings_notifications');
    const storedDarkMode = localStorage.getItem('settings_darkMode');

    if (storedUsername) setUsername(storedUsername);
    if (storedLanguage) setLanguage(storedLanguage);
    if (storedNotifications) setNotifications(JSON.parse(storedNotifications));
    if (storedDarkMode) setDarkMode(JSON.parse(storedDarkMode));
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('settings_username', username);
    localStorage.setItem('settings_language', language);
    localStorage.setItem('settings_notifications', JSON.stringify(notifications));
    localStorage.setItem('settings_darkMode', JSON.stringify(darkMode));
  }, [username, language, notifications, darkMode]);

  const handleUsernameEdit = () => setIsEditingUsername(!isEditingUsername);

  const handlePasswordChange = (field, value) => setPasswordData(prev => ({ ...prev, [field]: value }));

  const togglePasswordVisibility = (field) => setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));

  const handlePasswordSubmit = () => {
    if (passwordData.new !== passwordData.confirm) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    setShowPasswordChange(false);
    setPasswordData({ current: '', new: '', confirm: '' });
  };

  return (
    <div className={`settings-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="settings-container">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-description">Manage your account preferences and settings</p>

        <div className="settings-grid">
          {/* Left Column: Profile */}
          <div className="settings-left">
            {/* Profile Picture */}
            <div className="settings-card">
              <div className="card-header">
                <Camera size={20} color="#2b2d2fff" />
                <h3 className="card-title">Profile Picture</h3>
              </div>
              <p className="card-description">Upload or change user avatar</p>
              <div className="profile-section">
                <div className="avatar-placeholder">
                  <Camera size={20} color="#a0aec0" />
                </div>
                <button className="btn btn-primary">
                  <Upload size={12} /> Change Avatar
                </button>
              </div>
            </div>

            {/* Username */}
            <div className="settings-card">
              <div className="card-header">
                <Edit2 size={20} color="#333436ff" />
                <h3 className="card-title">Username</h3>
              </div>
              <p className="card-description">Your Name</p>
              <div className="username-section">
                {isEditingUsername ? (
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="username-input"
                    autoFocus
                  />
                ) : (
                  <span className="username-display">{username}</span>
                )}
                <button
                  onClick={handleUsernameEdit}
                  className={`btn ${isEditingUsername ? 'btn-success' : 'btn-primary'}`}
                >
                  {isEditingUsername ? 'Save' : 'Edit'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Other Settings */}
          <div className="settings-right">
            {/* Password Change */}
            <div className="settings-card">
              <div className="card-header">
                <Lock size={20} color="#2e2f2fff" />
                <h3 className="card-title">Password Change</h3>
              </div>
              <p className="card-description">Change password securely</p>
              {!showPasswordChange ? (
                <button
                  onClick={() => setShowPasswordChange(true)}
                  className="btn btn-primary"
                >
                  Change Password
                </button>
              ) : (
                <div className="password-form">
                  {['current', 'new', 'confirm'].map((field) => (
                    <div key={field} className="password-field">
                      <label className="password-label">
                        {field === 'current' ? 'Current Password' : field === 'new' ? 'New Password' : 'Confirm New Password'}
                      </label>
                      <div className="password-input-wrapper">
                        <input
                          type={showPasswords[field] ? 'text' : 'password'}
                          value={passwordData[field]}
                          onChange={(e) => handlePasswordChange(field, e.target.value)}
                          className="password-input"
                        />
                        <button type="button" onClick={() => togglePasswordVisibility(field)} className="password-toggle">
                          {showPasswords[field] ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="password-actions">
                    <button onClick={handlePasswordSubmit} className="btn btn-success">Update Password</button>
                    <button onClick={() => { setShowPasswordChange(false); setPasswordData({ current: '', new: '', confirm: '' }); }} className="btn btn-secondary">Cancel</button>
                  </div>
                </div>
              )}
            </div>

            {/* Language */}
            <div className="settings-card">
              <div className="card-header">
                <Globe size={20} color="#303133ff" />
                <h3 className="card-title">Language</h3>
              </div>
              <p className="card-description">Language dropdown (e.g., English, Urdu, Arabic)</p>
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-select">
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
                <option value="Arabic">Arabic</option>
                <option value="Spanish">Hindi</option>
                <option value="French">French</option>
              </select>
            </div>

            {/* Liked Art */}
            <div className="settings-card">
              <div className="card-header">
                <Heart size={20} color="#232528ff" />
                <h3 className="card-title">Liked Art</h3>
              </div>
              <p className="card-description">View and manage saved artwork</p>
              <button className="btn btn-primary">View Liked Art</button>
            </div>

            {/* Orders */}
            <div className="settings-card">
              <div className="card-header">
                <ShoppingBag size={20} color="#4a5568" />
                <h3 className="card-title">Your Orders</h3>
              </div>
              <p className="card-description">Navigate to user's purchase history</p>
              <button className="btn btn-primary">View Orders</button>
            </div>

            {/* Notifications */}
            <div className="settings-card">
              <div className="card-header">
                <Bell size={20} color="#4a5568" />
                <h3 className="card-title">Notifications</h3>
              </div>
              <p className="card-description">Toggle email or app notifications</p>
              <div className="toggle-section">
                <button onClick={() => setNotifications(!notifications)} className={`toggle-switch ${notifications ? 'active' : ''}`}>
                  <div className="toggle-slider" />
                </button>
                <span className="toggle-label">{notifications ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>

            
            {/* Delete Account */}
            <div className="settings-card delete-card">
              <div className="card-header">
                <Trash2 size={20} color="#e53e3e" />
                <h3 className="card-title delete-title">Delete Account</h3>
              </div>
              <p className="card-description">Permanently remove account (with confirmation)</p>
              {!showDeleteConfirm ? (
                <button onClick={() => setShowDeleteConfirm(true)} className="btn btn-danger">Delete Account</button>
              ) : (
                <div className="delete-confirmation">
                  <p className="delete-warning">Are you sure you want to delete your account? This action cannot be undone.</p>
                  <div className="delete-actions">
                    <button onClick={() => { alert('Account deletion confirmed'); setShowDeleteConfirm(false); }} className="btn btn-danger">Yes, Delete</button>
                    <button onClick={() => setShowDeleteConfirm(false)} className="btn btn-secondary">Cancel</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
