import PrivacyPolicyLink from "@/components/common/PrivacyPolicyLink";

export default function AuthLegalFooter() {
  return (
    <p className="text-center text-xs text-gray-500 dark:text-gray-400 sm:text-start">
      <PrivacyPolicyLink className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300" />
    </p>
  );
}
