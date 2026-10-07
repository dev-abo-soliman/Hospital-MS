import { Colors } from "@/src/Themes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.surface,
  },

  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },

  content: { padding: 16 },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    marginBottom: 16,
  },
  logoBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  brandNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  brandName: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.onSurface,
  },
  brandDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.secondary,
  },
  brandTagline: {
    fontSize: 11,
    color: Colors.onSurfaceVariant,
  },

  title: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "700",
    color: Colors.onSurface,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.onSurfaceVariant,
    marginTop: 4,
    marginBottom: 20,
  },

  form: {},
  fieldLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.onSurface,
    marginBottom: 6,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 16,
  },
  inputIcon: {
    position: "absolute",
    left: 14,
    zIndex: 1,
  },
  inputEyeIcon: {
    position: "absolute",
    right: 14,
    zIndex: 1,
  },
  inputWithIcon: {
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.surfaceContainerLowest,
    paddingLeft: 44,
    paddingRight: 44,
    fontSize: 16,
  },

  strengthContainer: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: 12,
    padding: 12,
    marginTop: -4,
    marginBottom: 16,
  },
  strengthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  strengthLabel: {
    fontSize: 12,
    color: Colors.onSurfaceVariant,
    fontWeight: "500",
  },
  strengthStatusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  strengthDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.tertiary,
  },
  strengthStatusText: {
    fontSize: 12,
    color: Colors.tertiary,
    fontWeight: "600",
  },
  strengthBarsRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 10,
  },
  strengthBarFilled: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.tertiary,
  },
  strengthBarEmpty: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.surfaceContainerHighest,
  },
  strengthChecksGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  strengthCheckItem: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  strengthCheckIconDone: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  strengthCheckIconPending: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.surfaceContainerHighest,
    alignItems: "center",
    justifyContent: "center",
  },
  strengthCheckTextDone: {
    fontSize: 11,
    fontWeight: "500",
    color: Colors.tertiary,
  },
  strengthCheckTextPending: {
    fontSize: 11,
    fontWeight: "500",
    color: Colors.outline,
  },

  termsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 20,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  checkboxUnchecked: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.outline,
    marginTop: 2,
  },
  termsText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: Colors.onSurfaceVariant,
  },
  termsLink: {
    fontWeight: "600",
    color: Colors.primary,
  },

  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.onPrimary,
    fontSize: 14,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginBottom: 16,
  },
  footerText: {
    color: Colors.onSurfaceVariant,
    fontSize: 14,
  },
  signInText: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },

  securityNotice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.secondaryContainer,
    padding: 14,
    borderRadius: 12,
    marginBottom: 24,
  },
  securityIconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  securityTextWrap: {
    flex: 1,
  },
  securityTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.onSecondaryContainer,
  },
  securityText: {
    fontSize: 12,
    color: Colors.secondary,
    marginTop: 2,
  },
});

export default styles;
