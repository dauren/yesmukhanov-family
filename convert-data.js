// Преобразование данных из family-data.js в формат FamilyTreeJS
function convertToFamilyTreeFormat(familyData) {
    const nodes = [];
    const personIdMap = new Map();
    
    // Сортировать людей по дате рождения (старшие первыми)
    const sortedPeople = familyData.people.sort((a, b) => {
        const dateA = a.birth.date ? new Date(a.birth.date) : new Date('1900-01-01');
        const dateB = b.birth.date ? new Date(b.birth.date) : new Date('1900-01-01');
        return dateA - dateB;
    });
    
    // Создать карту ID для последовательной нумерации
    sortedPeople.forEach((person, index) => {
        personIdMap.set(person.id, index + 1);
    });
    
    // Преобразовать людей в узлы
    sortedPeople.forEach((person, index) => {
        const nodeId = index + 1;
        
        // Найти родителей
        const parentRelations = familyData.relationships.filter(
            rel => rel.type === 'parent-child' && rel.child === person.id
        );
        
        let mid = null; // мать
        let fid = null; // отец
        
        parentRelations.forEach(rel => {
            const parent = familyData.people.find(p => p.id === rel.parent);
            if (parent) {
                const parentNodeId = personIdMap.get(parent.id);
                if (parent.gender === 'female') {
                    mid = parentNodeId;
                } else if (parent.gender === 'male') {
                    fid = parentNodeId;
                }
            }
        });
        
        // Найти супругов
        const spouseRelations = familyData.relationships.filter(
            rel => rel.type === 'spouse' && 
            (rel.person1 === person.id || rel.person2 === person.id)
        );
        
        const pids = [];
        spouseRelations.forEach(rel => {
            const spouseId = rel.person1 === person.id ? rel.person2 : rel.person1;
            const spouseNodeId = personIdMap.get(spouseId);
            if (spouseNodeId) {
                pids.push(spouseNodeId);
            }
        });
        
        // Вычислить возраст
        const calculateAge = (birthDate, deathDate = null) => {
            if (!birthDate) return null;
            
            const birth = new Date(birthDate);
            const end = deathDate ? new Date(deathDate) : new Date();
            
            let age = end.getFullYear() - birth.getFullYear();
            const monthDiff = end.getMonth() - birth.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < birth.getDate())) {
                age--;
            }
            
            return age;
        };
        
        // Форматировать дату для отображения
        const formatDate = (dateString) => {
            if (!dateString) return null;
            const date = new Date(dateString);
            return date.toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        };
        
        // Создать узел
        const node = {
            id: nodeId,
            name: person.name.display,
            gender: person.gender,
            birthDate: formatDate(person.birth.date),
            age: calculateAge(person.birth.date, person.death.date),
            died: person.death.date || null
        };
        
        // Добавить родителей если есть
        if (mid) node.mid = mid;
        if (fid) node.fid = fid;
        
        // Добавить супругов если есть
        if (pids.length > 0) node.pids = pids;
        
        nodes.push(node);
    });
    
    return nodes;
}

// Экспорт функции для использования в HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = convertToFamilyTreeFormat;
} else {
    window.convertToFamilyTreeFormat = convertToFamilyTreeFormat;
}