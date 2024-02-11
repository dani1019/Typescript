{
    /**
     * Enum
     */
    //Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const WENDESAY = 1;
    const TUESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WENDESAY": 2});
    const dayOFToday = DAYS_ENUM.MONDAY;
    
    //Typescript
    //가능한한 쓰지 않는 것이 좋다.
    type DaysofWeek = 'Monday' | 'Tuesday'
    enum Days {
        Monday,
        Tuesday,
        Wendesday,
        Thursday,
    }

    console.log(Days.Tuesday);
    const day = Days.Thursday;
    console.log(day);

    let daysofweek : DaysofWeek = 'Monday';
    
    
}