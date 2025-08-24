const fs = require('fs');

// Import the family data
const { FAMILY_DATA } = require('./family-data.js');

// Function to format date for iCal (YYYYMMDD format)
function formatDateForICal(dateString) {
  if (!dateString) return null;
  return dateString.replace(/-/g, '');
}

// Function to escape text for iCal
function escapeICalText(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

// Function to generate iCal content
function generateICal() {
  let icalContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Family Calendar//Family Birthdays//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Family Birthdays',
    'X-WR-CALDESC:Family member birthdays from family tree data'
  ];

  // Process each person
  FAMILY_DATA.people.forEach((person, index) => {
    if (person.birth && person.birth.date) {
      const birthDate = person.birth.date;
      const formattedDate = formatDateForICal(birthDate);
      const displayName = person.name.display || `${person.name.given || ''} ${person.name.family || ''}`.trim();
      
      if (formattedDate) {
        // Create birthday event
        const event = [
          'BEGIN:VEVENT',
          `UID:birthday-${person.id}-${Date.now()}-${index}`,
          `DTSTART;VALUE=DATE:${formattedDate}`,
          `DTEND;VALUE=DATE:${formattedDate}`,
          `SUMMARY:${escapeICalText(displayName)}'s Birthday`,
          `DESCRIPTION:${escapeICalText(displayName)}'s birthday`,
          'CATEGORIES:BIRTHDAY,FAMILY',
          'CLASS:PUBLIC',
          'STATUS:CONFIRMED',
          'TRANSP:TRANSPARENT',
          'END:VEVENT'
        ];
        
        icalContent.push(...event);
      }
    }
  });

  icalContent.push('END:VCALENDAR');
  
  return icalContent.join('\r\n');
}

// Function to save iCal file
function saveICalFile(content, filename = 'family-birthdays.ics') {
  try {
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✅ iCal file saved successfully: ${filename}`);
    console.log(`📅 Total events created: ${FAMILY_DATA.people.filter(p => p.birth && p.birth.date).length}`);
  } catch (error) {
    console.error('❌ Error saving iCal file:', error.message);
  }
}

// Main execution
function main() {
  console.log('🎂 Generating iCal file from family data...');
  
  // Count people with birth dates
  const peopleWithBirthDates = FAMILY_DATA.people.filter(p => p.birth && p.birth.date);
  console.log(`📊 Found ${peopleWithBirthDates.length} people with birth dates out of ${FAMILY_DATA.people.length} total`);
  
  // Generate iCal content
  const icalContent = generateICal();
  
  // Save to file
  saveICalFile(icalContent);
  
  // Display some sample events
  console.log('\n📋 Sample events:');
  peopleWithBirthDates.slice(0, 5).forEach(person => {
    const displayName = person.name.display || `${person.name.given || ''} ${person.name.family || ''}`.trim();
    console.log(`   • ${displayName}: ${person.birth.date}`);
  });
  
  if (peopleWithBirthDates.length > 5) {
    console.log(`   ... and ${peopleWithBirthDates.length - 5} more`);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = { generateICal, saveICalFile }; 