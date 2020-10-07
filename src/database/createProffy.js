module.exports = async function (db, { proffyValue, classValue, classScheduleValues })
{
    //inserir dados na table de proffys 
   const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name, 
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
   `)

   const proffy_id = insertedProffy.lastID 
    
   // inserir dados na tabela de classes 
   const insertedClass = await db.run (`
            INSERT INTO classes (
                subject,
                cost, 
                proffy_id
            )   VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
   `)

    const class_id = insertedClass.lastID
    
    //inserir dados na tabela class_eschedule
   const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
            return db.run(`
            INSERT INTO class_Schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
               "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );

        `)
    })

    //aqui vou exercutar todos os db.run() das class schedules
    await Promise.all(insertedAllClassScheduleValues)
}