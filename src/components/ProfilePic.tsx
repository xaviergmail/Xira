import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function ProfilePic() {
  return (
    <div className="rounded-full bg-gray-300 text-gray-50 border-px border-gray-400 border flex items-center justify-center w-10 h-10 text-2xl">
      <FontAwesomeIcon icon={faUser} />
    </div>
  )
}
