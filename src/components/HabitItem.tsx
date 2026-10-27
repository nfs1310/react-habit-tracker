import Button from "./Button";

type HabitItemProps = {
    habit: { id: string; name: string }
}

function HabitItem({ habit }: HabitItemProps) {
    const visibleDates = [new Date(), new Date(), new Date()]
    return (
        <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                {habit.name}
            </div>
            <div className="flex gap-1.5">
                {visibleDates.map(date => (
                    <Button key={date.toISOString()}>
                        <span className="font-medium">Mon</span>
                        <span>2</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default HabitItem;