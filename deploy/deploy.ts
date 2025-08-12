import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployedFHERC20 = await deploy("FHERC20", {
    from: deployer,
    args: ["FHERC20-1", "MTK"], // 👈 Constructor parameters here

    log: true,
  });

  console.log(`FHERC20 contract: `, deployedFHERC20.address);
};
export default func;
func.id = "deploy_fheCounter"; // id required to prevent reexecution
func.tags = ["FHECounter"];
