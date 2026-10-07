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

  // Brand row
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 24,
  },
  brandLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  brandName: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primary,
  },
  brandSubtitle: {
    fontSize: 11,
    fontWeight: "500",
    color: Colors.onSurfaceVariant,
    marginTop: -2,
  },
  vaultBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.secondaryContainer,
  },
  vaultDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
  },
  vaultText: {
    fontSize: 11,
    fontWeight: "600",
    color: Colors.secondary,
  },

  // Hero
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
    marginTop: 6,
    marginBottom: 20,
  },

  // Error alert
  alertBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: Colors.errorContainer,
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  alertTextWrap: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.onErrorContainer,
  },
  alertMessage: {
    fontSize: 12,
    color: Colors.onErrorContainer,
    marginTop: 2,
  },
  alertCloseButton: {
    padding: 2,
  },

  // Form
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
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.surfaceContainerLowest,
    paddingLeft: 44,
    paddingRight: 44,
    fontSize: 16,
  },

  // Forgot password
  forgotPasswordRow: {
    alignItems: "flex-end",
    marginBottom: 8,
  },
  forgotPasswordText: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.primary,
  },

  // Submit button
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 8,
  },
  buttonText: {
    color: Colors.onPrimary,
    fontSize: 14,
    fontWeight: "600",
  },

  // Divider
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.surfaceContainerHighest,
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 11,
    fontWeight: "600",
    color: Colors.outline,
    letterSpacing: 1,
  },

  // Google button
  googleButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.surfaceContainerLowest,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  googleButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.onSurface,
  },

  // Footer (sign up link)
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 24,
  },
  footerText: {
    color: Colors.onSurfaceVariant,
    fontSize: 14,
  },
  signUpText: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: 14,
  },

  // Security notice
  securityNotice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.surfaceContainer,
    padding: 14,
    borderRadius: 12,
    marginTop: 28,
    marginBottom: 20,
  },
  securityIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: Colors.secondaryContainer,
    alignItems: "center",
    justifyContent: "center",
  },
  securityTextWrap: {
    flex: 1,
  },
  securityTitle: {
    fontSize: 11,
    fontWeight: "700",
    color: Colors.secondary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  securityText: {
    fontSize: 12,
    color: Colors.onSurfaceVariant,
    marginTop: 2,
  },
});

export default styles;
