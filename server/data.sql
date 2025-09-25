-- Initial data for sci-competition

-- Users
INSERT INTO users (id, username, password, email, role) VALUES
	(1, 'admin', 'admin123', 'admin@sci.com', 'admin'),
	(2, 'teacher1', 'teach123', 'teacher1@sci.com', 'teacher'),
	(3, 'judge1', 'judge123', 'judge1@sci.com', 'judge'),
	(4, 'student1', 'stud123', 'student1@sci.com', 'student');

-- Activities
INSERT INTO activities (id, name, description, type, level, team_size, date, location, reg_open, reg_close, contact_name, contact_phone, contact_email, status) VALUES
	(1, 'Science Fair', 'Annual science fair for students', 'competition', 'highschool', 1, '2025-10-10', 'Main Hall', '2025-09-01', '2025-09-30', 'Dr. Smith', '0812345678', 'smith@sci.com', 'open'),
	(2, 'Robotics Workshop', 'Hands-on robotics workshop', 'workshop', 'university', 5, '2025-11-05', 'Lab 2', '2025-10-01', '2025-10-31', 'Ms. Jane', '0898765432', 'jane@tech.com', 'open'),
	(3, 'Math Olympiad', 'Math competition for high school students', 'competition', 'highschool', 3, '2025-12-01', 'Room 101', '2025-11-01', '2025-11-25', 'Mr. Lee', '0823456789', 'lee@math.com', 'closed');

-- Roles (if needed)
INSERT INTO roles (id, name) VALUES
	(1, 'admin'),
	(2, 'teacher'),
	(3, 'judge'),
	(4, 'student');
