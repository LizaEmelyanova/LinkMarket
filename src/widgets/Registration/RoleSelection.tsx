import { RegistrationCard } from "shared/ui"

export const RoleSelection = ({
    setOption,
    setRole,
}: {
    setOption: (option: string) => void
    setRole: (option: string) => void
}) => {
    return (
        <>
            <RegistrationCard
                role={'buyer'}
                setOption={setOption}
                setRole={setRole}
            />
            <RegistrationCard
                role={'salesman'}
                setOption={setOption}
                setRole={setRole}
            />
        </>
    )
}